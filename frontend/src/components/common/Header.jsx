// import React from 'react';
import mainImage from '../../assets/img/homemain.png';
import mainLogo from '../../assets/img/homemainlogo.png';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <section>
            <div class="heads">
                <img class="mainimage" src={mainImage} />
                <a href ="/">
                    <div class="logo">
                        <img class="logo-restrocafe" src={mainLogo} />
                    </div>
                </a >
                <div class="quotes">
                    <h1 class="head_quote">
                        Good food is <br /> The Foundation of <br />
                        <span>GENUINE HAPPINESS</span>
                    </h1>
                </div>
            </div>
        </section>
    );
}

// import React from 'react';

// function Header() {
//     return (
//         <>
//             <div class="heads">
//                 <img class="mainimage" src={mainImage} />
//                 <div class="logo">
//                     <img class="logo-restrocafe" src={mainLogo} />
//                 </div>
//                 <div class="quotes">
//                     <h1>Good food is</h1>
//                     <h1>The Foundation of</h1>
//                     <h1>GENUINE HAPPINESS</h1>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Header;
