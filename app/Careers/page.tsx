import React from 'react';

const Careers: React.FC = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Careers at Magnimont</h1>
            <p>Join our team and help us build the future!</p>
            
            <section>
                <h2>Open Positions</h2>
                <ul>
                    <li>Software Engineer</li>
                    <li>Product Manager</li>
                    <li>UX Designer</li>
                </ul>
            </section>
            
            <section>
                <h2>Why Work With Us?</h2>
                <p>At Magnimont, we value innovation, collaboration, and growth. We offer competitive salaries, comprehensive benefits, and opportunities for professional development.</p>
            </section>
            
            <section>
                <h2>How to Apply</h2>
                <p>Send your resume and cover letter to <a href="mailto:careers@magnimont.com">careers@magnimont.com</a>.</p>
            </section>
        </div>
    );
};

export default Careers;