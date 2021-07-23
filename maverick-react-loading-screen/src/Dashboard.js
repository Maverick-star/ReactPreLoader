import React from 'react';

const Dashboard = ({handleLogout}) => {
    <section className='Hero'>
        <nav>
            <h2>Wellcome</h2>
            <button onClick={handleLogout}>Logout</button>
        </nav>

    </section>
};

export default Dashboard;