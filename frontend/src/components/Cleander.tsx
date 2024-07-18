import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './css/cleander.css';


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
const Cleander = () => {
    const [value, onChange] = useState<Value>(new Date());

    return (
      <>
      <p>{value.toDateString()}</p>
        <Calendar onChange={onChange} value={value} locale='en' />
      </>
  )
}

export default Cleander
