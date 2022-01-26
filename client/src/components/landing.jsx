import React, { useEffect, useState } from 'react';

const Landing = ({account}) => {

    const [accounter, setAccounter] = useState("");

    // useEffect(() => {
    //   //
    // }, []);

    useEffect(() => {
        account && console.log('account @ Landing---> ', account);
        account && setAccounter(account.toString());
    }, [account])

    return (
        <>
       <h1>Landing Component</h1> 
       <h3>{accounter}</h3>
        </>
    )

}
export default Landing;