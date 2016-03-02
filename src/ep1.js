let columns,
    dataSource,
    lineChartConfig,
    dimensions,
    dimenActions,
    type

if(!exp) {
  type = 'main'
} else if(!cate && target === '分类') {
  type = 'category'
} else if(!cate && target === '自定义事件') {
  type = 'event'
} else if(target === '位置') {
  type = 'position'
} else if(target === '类型') {
  type = 'type'
}

columns = getColumns(type)
if(type === 'main') {
  dimensions = '实验'
  columns[0].render = function(text, record) {
    return (
      <span className="linkArea">
        <Link className="pull-right mr30" to={{
            pathname: '/mi-life/experiment/offline',
            query: {
              key: record.eid
            }
          }}>
          <i className="fa fa-line-chart fa-15"></i>
        </Link>
        <Link to={{
            pathname: '/mi-life/experiment/offline',
            query: {
              exp: record.eid,
              target: '分类',
              key: 'total'
            }
          }}>
          {text}
        </Link>
      </span>
    )
  }
  columns[0].width = '156'
  columns[8].width = '131'

} else if(type === 'category') {
  dimensions = ['分类', '自定义事件']
  let cateAction = {
    pathname: '/mi-life/experiment/offline',
    query: {
      exp: exp,
      target: '分类',
      key: 'total'
    }
  }
  let eventAction = {
    pathname: '/mi-life/experiment/offline',
    query: {
      exp: exp,
      target: '自定义事件',
      key: 'total'
    }
  }
  dimenActions = [cateAction, eventAction]
  columns[0].render = function(text, record) {
    return (
      <span className="linkArea">
        <Link className="pull-right mr30" to={{
            pathname: '/mi-life/experiment/offline',
            query: {
              exp: record.eid,
              target: '分类',
              key: record.category
            }
          }}>
          <i className="fa fa-line-chart fa-15"></i>
        </Link>
        <Link to={{
            pathname: '/mi-life/experiment/offline',
            query: {
              exp: record.eid,
              target: '位置',
              cate: record.category,
              key: '1'
            }
          }}>
          {text}
        </Link>
      </span>
    )
  }

} else if(type === 'event') {
  dimensions = ['分类', '自定义事件']
  let cateAction = {
    pathname: '/mi-life/experiment/offline',
    query: {
      exp: exp,
      target: '分类',
      key: 'total'
    }
  }
  let eventAction = {
    pathname: '/mi-life/experiment/offline',
    query: {
      exp: exp,
      target: '自定义事件',
      key: 'total'
    }
  }
  dimenActions = [cateAction, eventAction]
  columns[2].render = function(text, record) {
    return (
      <span className="linkArea">
        <Link className="pull-right mr30" to={{
            pathname: '/mi-life/experiment/offline',
            query: {
              exp: record.eid,
              target: '自定义事件',
              key: JSON.stringify({
                category: record.category,
                action: record.action,
                name: record.name
              })
            }
          }}>
          <i className="fa fa-line-chart fa-15"></i>
        </Link>
        {text}
      </span>
    )
  }

} else if(type === 'position') {
  dimensions = ['位置', '类型']
  let posAction = {
    pathname: '/mi-life/experiment/offline',
    query: {
      exp: exp,
      cate: cate,
      target: '位置',
      key: '1'
    }
  }
  let typeAction = {
    pathname: '/mi-life/experiment/offline',
    query: {
      exp: exp,
      cate: cate,
      target: '类型',
      key: 'News'
    }
  }
  dimenActions = [posAction, typeAction]
  columns[0].render = function(text, record) {
    return (
      <span className="linkArea">
        <Link className="pull-right mr30" to={{
            pathname: '/mi-life/experiment/offline',
            query: {
              exp: record.eid,
              cate: record.category,
              target: '位置',
              key: record.position
            }
          }}>
          <i className="fa fa-line-chart fa-15"></i>
        </Link>
        {text}
      </span>
    )
  }

} else if(type === 'type') {
  dimensions = ['位置', '类型']
  let posAction = {
    pathname: '/mi-life/experiment/offline',
    query: {
      exp: exp,
      cate: cate,
      target: '位置',
      key: '1'
    }
  }
  let typeAction = {
    pathname: '/mi-life/experiment/offline',
    query: {
      exp: exp,
      cate: cate,
      target: '类型',
      key: 'News'
    }
  }
  dimenActions = [posAction, typeAction]
  columns[0].render = function(text, record) {
    return (
      <span className="linkArea">
        <Link className="pull-right mr30" to={{
            pathname: '/mi-life/experiment/offline',
            query: {
              exp: record.eid,
              cate: record.category,
              target: '类型',
              key: record.position
            }
          }}>
          <i className="fa fa-line-chart fa-15"></i>
        </Link>
        {text}
      </span>
    )
  }
}

if(table) {
  dataSource = getTableResult(table.result, type)
  var csvData = getTableCSVData(dataSource, type)
  var csvList = new Blob([Papa.unparse(csvData)], {type: "text/csv;charset=utf-8"})
  var listFileName  = '实验' + moment(tableTs).format('YYYY.MM.DD') + '.csv'
}

if(type !== 'main' && chart) {
  lineChartConfig = getLineChartData(chart.result, type)
  var csvLineData = getLineCSVData(chart.result, type)
  var csvLine = new Blob([Papa.unparse(csvLineData)], {type: "text/csv;charset=utf-8"})
  var lineFileName = key + '-' + moment(startTs).format('YYYY.MM.DD') +
    '-' + moment(endTs).format('YYYY.MM.DD') + '.csv'
} else if(chart && chart.result.pv) {
  lineChartConfig = getLineChartData(chart.result, type)
  var csvLineData = getLineCSVData(chart.result, type)
  var csvLine = new Blob([Papa.unparse(csvLineData)], {type: "text/csv;charset=utf-8"})
  var lineFileName = key + '-' + moment(startTs).format('YYYY.MM.DD') +
    '-' + moment(endTs).format('YYYY.MM.DD') + '.csv'
}

let rowClassName = (record, index) => {
  if(type === 'main') {
    return record.eid === key ? "current": ""
  } else if(type === 'category') {
    return record.category === key ? "current": ""
  } else if(type === 'event') {
    let col = {
      category: record.category,
      action: record.action,
      name: record.name
    }
    return JSON.stringify(col) === key ? "current": ""
  } else {
    return record.position === key ? "current": ""
  }
}

let chartTitile = (() => {
  if(type === 'main') {
    return '离线实验'
  } else if(type === 'category') {
    return (
      <span>
        <Link to={{
            pathname: '/mi-life/experiment/offline',
            query: {
              key: exp
            }
          }}>
          离线实验
        </Link> - 分类
      </span>
    )
  } else if(type === 'event') {
    return (
      <span>
        <Link to={{
            pathname: '/mi-life/experiment/offline',
            query: {
              key: exp
            }
          }}>
          离线实验
        </Link> - 自定义事件
      </span>
    )
  } else if(type === 'position') {
    return (
      <span>
        <Link to={{
            pathname: '/mi-life/experiment/offline',
            query: {
              key: exp
            }
          }}>
          离线实验
        </Link> - <Link to={{
          pathname: '/mi-life/experiment/offline',
          query: {
            exp,
            target: '分类',
            key: cate
          }
        }}>
          分类
        </Link> - 位置
      </span>
    )
  } else if(type === 'type') {
    return (
      <span>
        <Link to={{
            pathname: '/mi-life/experiment/offline',
            query: {
              key: exp
            }
          }}>
          离线实验
        </Link> - <Link to={{
          pathname: '/mi-life/experiment/offline',
          query: {
            exp,
            target: '分类',
            key: cate
          }
        }}>
          分类
        </Link> - 位置
      </span>
    )
  }
})()
