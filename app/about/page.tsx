
import React from 'react';
import NavigationPage from '../nav/navigation'; // Import the NavigationPage component

export default function AboutPage() {
    return (
        <div>
            <div>
                <NavigationPage/>
            </div>
            <div className="container mx-auto py-5 text-left">
                <h1 className="font-bold">Why make this?</h1>
                <p>At work, I was always struggling to find the right GPU instances for our projects. Ever spent ages trying to find centralized comparisons for instances in a cloud provider? Yeah, but even harder is isolating that information for all GPU instances in a cloud provider. That's why I put together this. </p>
                <br/>
                <p>However, as an individual developer, it can be more cost effective and quicker to use smaller cloud providers. The new entrants in AI / cloud instance space have compelling price points and are quick to setup. We will be adding that information soon. </p>
            </div>
        </div>

    )
}