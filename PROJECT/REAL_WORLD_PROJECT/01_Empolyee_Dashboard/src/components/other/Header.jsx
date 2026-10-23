function Header({data , changeUser}) {

  const logout = ()=> {
    localStorage.setItem('LoggedIn' ,'')
    changeUser('')
    // window.location.reload();
  }

  console.log(data)
  return (
    <div className='flex items-center justify-between'>
        {/* Added the ? safety net and a fallback name */}
        <h1 className='text-xl'>
            Hello, <br />
            <span className='text-2xl'><b>{data?.name || 'User'} 👋🏻</b></span>
        </h1>
        <button onClick={logout} className='bg-red-700 rounded-2xl px-3 py-2'>LogOut</button>
    </div> 
  )
}

export default Header