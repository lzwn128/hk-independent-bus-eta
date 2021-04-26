import React, { useState, useEffect, useContext, useRef } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import MuiAccordion from'@material-ui/core/Accordion'
import MuiAccordionSummary from'@material-ui/core/AccordionSummary'
import MuiAccordionDetails from'@material-ui/core/AccordionDetails'
import {
  Box, CircularProgress, Typography
} from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import AppContext from '../AppContext'
import { useTranslation } from 'react-i18next'
import { 
  fetchRouteStops as fetchRouteStopsViaApi,
  fetchEtas as fetchEtasViaApi 
} from '../data-api'

const RouteEta = () => {
  const { id, panel } = useParams()
  const [ expanded, setExpanded ] = useState(false)
  const { routeList, stopList, setRouteList, setStopList, setSelectedRoute } = useContext ( AppContext )
  const [ route, serviceType, bound ] = id.split('+').slice(0,3)
  const { i18n } = useTranslation()
  const history = useHistory()
  const accordionRef = useRef([])

  const routeObj = routeList[id]

  const handleChange = ( panel ) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
    if ( newExpanded ) {
      history.replace(`/${i18n.language}/route/${id}/${panel}`)
    }
  }

  useEffect(() => {
    setSelectedRoute(`${id}/${expanded}`)
  }, [expanded])

  useEffect(() => {
    // check if stops not fetched
    if ( routeObj.co.filter(co => routeObj.stops[co] == null).length ) {
      // fetch in parallel
      Promise.all(
        routeObj.co.map(co => {
          if ( routeObj.stops[co] !== null ) return null;
          return fetchRouteStopsViaApi({
            route, serviceType, bound, co
          })
        }).filter(v => v)
      ).then(objs => {
        // set stop list
        let _stopList = {}
        objs.forEach( obj => {
          _stopList = {..._stopList, ...obj.stopList}
        } )
        setStopList({...stopList, ..._stopList})

        // set route list
        setRouteList(prevRouteList => {
          let _routeList = JSON.parse(JSON.stringify(prevRouteList))
          objs.forEach(obj => _routeList[id].stops[obj.co] = obj.routeStops)
          return _routeList
        })
      })
    }

    if ( parseInt(panel) ) {
      setExpanded(parseInt(panel))
      accordionRef.current[parseInt(panel)].scrollIntoView({behavior: 'smooth', block: 'nearest'})
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const classes = useStyles()

  if ( routeObj.stops[routeObj.co[0]] == null ) {
    return (
      <Box className={classes.loadingContainer}>
        <CircularProgress size={30} />
      </Box>
    )
  }

  return (
    <Box className={classes.boxContainer}>
      {
        routeObj.stops[routeObj.co[0]].map((stop, idx) => (
          <Accordion 
            key={'stop-'+idx} 
            expanded={expanded === idx}
            onChange={handleChange(idx)}
            TransitionProps={{unmountOnExit: true}}
            ref={el => {accordionRef.current[idx] = el}}
          >
            <AccordionSummary>{stopList[stop].name[i18n.language]}</AccordionSummary>
            <AccordionDetails>
              <TimeReport 
                route={route}
                seq={idx + 1}
                routeStops={routeObj.stops}
                serviceType={serviceType}
                bound={bound}
                co={routeList[id].co}
                routeSize={routeObj.stops[routeObj.co[0]].length}
              />
            </AccordionDetails>
          </Accordion>
        ))
      }
    </Box>
  )
}

export default RouteEta

const TimeReport = ( { route, routeStops, seq, bound, serviceType, co, routeSize } ) => {
  const { t, i18n } = useTranslation()
  const [ etas, setEtas ] = useState(null)

  const fetchEtas = () => {
    const fetchData = async () => {
      setEtas( await fetchEtasViaApi({route, routeStops, seq, bound, serviceType, co, routeSize}) )
    }
    fetchData()
  }

  useEffect( () => {
    fetchEtas()
    const fetchEtaInterval = setInterval(() => {
      fetchEtas()
    }, 30000)

    return () => clearInterval(fetchEtaInterval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if ( etas == null ) {
    return (
      <CircularProgress size={20} style={{}} />
    )
  }

  const displayMsg = (eta) => {
    let ret = ''
    switch (eta) {
      case null: 
        break
      case 0: 
        ret = '- '+t('分鐘')
        break
      default:
        ret = eta + " " + t('分鐘')
        break
    }
    return ret
  }
  
  return (
    <div>
      {
        etas.length === 0 ? t('暫無班次') : (
          etas.map((eta, idx) => (
            <Typography variant="subtitle1" key={`route-${idx}`}>
              {displayMsg(eta.eta)} {eta.remark[i18n.language] ? ' - ' + eta.remark[i18n.language] : '' } {t(eta.co)}
            </Typography>
          ))
        )
      }
    </div>
  )
}

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion)

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const useStyles = makeStyles(theme => ({
  boxContainer: {
    overflowY: 'scroll'
  },
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center'
  }
}))