const Perks = ({selected , onchange}) => {
  function handelCheckboxClick(e) {
    // alert(name)
    const {name ,checked} =e.target;
    console.log(name ,checked )
    if(checked) {
      onchange([...selected , name])
    }else {
      onchange([...selected.filter(selectedName => selectedName !== name)])
    }
    // console.log(selected)
   
  }
  return (
    <>
        <div className="w-full  px-3 mb-6 md:mb-0 -mx-3 mt-6">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Perks
                  {/* <p className="text-light">tell more about your place</p> */}
                </label>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-2 rounded-md ">
                <label className ='bg-white rounded-2xl p-4 flex items-center gap-1 cursor-pointer '>
                <input type="checkbox" name="wifi" onChange={handelCheckboxClick} />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24className=" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
</svg>

                <span>Wifi</span>
                </label>

                <label className ='bg-white rounded-2xl p-4 flex items-center gap-1 cursor-pointer '>
                <input type="checkbox" name="parking" onChange={handelCheckboxClick} />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
</svg>

                <span>Free parking</span>
                </label>

                <label className ='bg-white rounded-2xl p-4 flex items-center gap-1 cursor-pointer '>
                <input type="checkbox" name="tv" onChange={handelCheckboxClick}/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
</svg>

                <span>TV</span>
                </label>

                <label className ='bg-white rounded-2xl p-4 flex items-center gap-1 cursor-pointer '>
                <input type="checkbox"  name="pets" onChange={handelCheckboxClick}/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
</svg>

                <span>Pets</span>
                </label>

                <label className ='bg-white rounded-2xl p-4 flex items-center gap-1 cursor-pointer '>
                <input type="checkbox"  name="enterance" onChange={handelCheckboxClick}/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
</svg>

                <span>Private&nbsp;enterance</span>
                </label>
                <label className ='bg-white rounded-2xl p-4 flex items-center gap-1 cursor-pointer '>
                <input type="checkbox" name="bathroom" onChange={handelCheckboxClick}/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>


                <span>Bathroom</span>
                </label>
                </div>
               
              </div>
    </>
  )
}

export default Perks
