import React from 'react';

function Buttons() {
    return (
        <div>
            <center>
                <div class="button_div">
                    <a href="/" className="button_cat">
                        ALL
                    </a>
                    <a href="/?category=hot" className="button_cat">
                        HOT
                    </a>
                    <a href="/?category=cold" className="button_cat">
                        COLD
                    </a>
                    <a href="/?category=bagel" className="button_cat">
                        BAGEL
                    </a>
                </div>
            </center>
        </div>
    );
}

export default Buttons;
