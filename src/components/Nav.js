import '../css/Nav.css'
function Nav() {
    return (
      <>
      <aside>
        <nav>
            <ul>
                <li><span className='step-circle'></span><span><em>STEP 1</em><br></br><b>YOUR INFO</b></span></li>
                <li><span className='step-circle'></span><span><em>STEP 2</em><br></br><b>SELECT PLAN</b></span></li>
                <li><span className='step-circle'></span><span><em>STEP 3</em><br></br><b>ADD ONS</b></span></li>
                <li><span className='step-circle'></span><span><em>STEP 4</em><br></br><b>SUMMARY</b></span></li>
            </ul>
        </nav>
    </aside> 
      </>
    );
  }
  
  export default Nav;