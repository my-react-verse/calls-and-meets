"use client"

import Image from "next/image";
import Card from "./components/Card";
import { useState } from "react";

function useFormControl(){
  const [value, setValue] = useState("");

  function onChange(e){
    
  }

  return {
    value,

  }
}

export default function Home() {

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [member, setMember] = useState("");
  const [members, setMembers] = useState([]);


  return (
    <>

      <div className="grid grid-cols-3">

        <Card>
          <form>
            <div className="form-control">
              <label className="text-sm font-semibold text-gray-700 mb-1" htmlFor="title">Meeting Title</label>
              <input className="text-sm text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div className="form-control">
              <label className="text-sm font-semibold text-gray-700 mb-1" htmlFor="date">Meeting Date</label>
              <input className="text-sm text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>

            <div className="form-control">
              <label className="text-sm font-semibold text-gray-700 mb-1" htmlFor="time">Meeting Time</label>
              <input className="text-sm text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="time" value={time} onChange={(e) => setTime(e.target.value)} />
            </div>

            <div className="form-control">
              <label className="text-sm font-semibold text-gray-700 mb-1" htmlFor="members">Members</label>
              <span onClick={() => { setMembers(members.concat(member)); setMember("") }}>+</span>
              <ul>
                <li><input
                  className="text-sm text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={member} onChange={(e) => setMember(e.target.value)}
                  onKeyDown={(e) => { if (e.key == 'Tab') { setMembers(members.concat(e.target.value)); setMember("") } }}
                /></li>
              </ul>
              {JSON.stringify(members)}
            </div>

            <div className="form-control">
              <button className="p-2 text-sm bg-blue-400 rounded-2xl" type="button" >Submit</button>
            </div>
          </form>

        </Card>
      </div>
    </>
  );
}
