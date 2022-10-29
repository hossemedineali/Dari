import ReactTimeAgo from 'react-time-ago'
import TimeAgo  from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/ru.json'

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)

type props={
    date:Date
}
const TimeAGO:React.FC <props>= ({date}) => {
    return (  <div>
        Last seen: <ReactTimeAgo date={date} locale="en-US"/>
      </div> );
}
 
export default TimeAgo;


