import React from 'react';
import './Homepage.css';

export default function Homepage() {
    return (
        <div>
            <h1>Welcome to the worst buggy website.</h1>            
            <div id="homepageDescription">
                <h3>You could have some fun:</h3>
                • make your first simple test plan;<br />
                • execute your test plan;<br />
                • find here some bugs;<br />
                • get some practice in testing real SPA-application;<br />
                • find an easter eggs scattered around the site.
            </div>
        </div>
    );
}