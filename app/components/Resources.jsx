const React = require('react');
const Link = require('react-router-dom').Link
const ResourceStyle = require("./Resources.css");
const ResourceBox = require('./ResourceBox.jsx');
const Navbar = require('./Navbar.jsx');

class Resources extends React.Component{
  render() {
    return(
      <div>
        <Navbar/>
        <h1 className="title">Resources</h1>
        <p>It’s common to feel stressed or anxious during this time. It may be especially hard for
 people who already manage feelings of anxiety or emotional distress. For example, for
 those of us with obsessive-compulsive disorder (OCD), public health recommendations
 about contamination and hand washing may make it more difficult to manage our
 symptoms.
 Recognizing how you’re feeling can help you care for yourself, manage your stress and
 cope with difficult situations. Even when you don’t have full control of a situation, there
 are things you can do.</p>
        <a href="https://www.cdc.gov/coronavirus/2019-ncov/index.html" target="_blank" align="center">CDC Website</a>
        <div className="covid">
          <ResourceBox 
          title="What Is COVID-19?"          
          description="COVID-19 is the new respiratory disease spreading around the world and it is caused by a coronavirus. COVID-19 is short for coronavirus disease 2019."        
          image="https://cdn.glitch.com/9fe30fec-91e2-4735-9afb-3979d2fd1f53%2Fcoronavirus.png?v=1587255907959"
          />
          <ResourceBox 
          title="What Are COVID-19 Symptoms?"       
          description="The most common symptoms are very similar to other viruses: fever, cough, and difficulty breathing. Symptoms may appear 2 to 14 days after exposure
                       and range from mild to severe illness."    
          image="https://cdn.glitch.com/9fe30fec-91e2-4735-9afb-3979d2fd1f53%2Fperson-tired.png?v=1587256760482"
          />
          <ResourceBox 
          title="What To Do If You Get Sick"            
          description="1. Stay Home
                                  2. Monitor your symptoms. If they get worse, contact your doctor immediately.
                                  3. Do your best to stay away from your other household members, including pets."
          image="https://cdn.glitch.com/9fe30fec-91e2-4735-9afb-3979d2fd1f53%2Fsick.png?v=1587258129254"
          />
        </div>
        
        <div className="health">
          <ResourceBox
            title="Look After Your Mental Health"            
            description="Practice mindfulness, which can help you say calm. "
            image="https://cdn.glitch.com/9fe30fec-91e2-4735-9afb-3979d2fd1f53%2Fpeace-pigeon.png?v=1587258761007"
            />
          <ResourceBox
            title="Exercise"            
            description="Exercise for at least 30 minutes a day. Walking counts."
            image="https://cdn.glitch.com/9fe30fec-91e2-4735-9afb-3979d2fd1f53%2Fsquats.png?v=1587264702610"
            />
          <ResourceBox
            title="Stay Hydrated"            
            description="Drink water with every meal, in between each meal, and when you work out"
            image="https://cdn.glitch.com/9fe30fec-91e2-4735-9afb-3979d2fd1f53%2Fwater-bottle.png?v=1587264405571"
            />
        </div>
        
      </div>
    );
  }
}

module.exports = Resources;