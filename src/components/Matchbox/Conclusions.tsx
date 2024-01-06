import React from 'react';
import "../../styles/Conclusions.css";

function Conclusions() {

  return (
    <div className="Conclusions">
        <div className = "separator">
            <hr className="line" />
            <h2>Conclusions</h2>
            <hr className="line" />
        </div>
        <div className="content">
          <div className="section">
              <h3>Summary</h3>
              <p>Our team believed that we could fill the void between project making tools, and collaboration tools employed in most IT projects.</p>
              <p>By creating a platform that promotes a friendly environment, easily accessible, where everyone can promote 
                their ideas or put their skills to the test, we believe that Matchbox fills that void.</p>
              <p>As our target users were mostly newbies, people who want to find specific projects or 
                find a team to help develop their ideas, Matchbox is more inclusive than most 
                existing solutions which tend to focus on one specific type of user.</p>
          </div>
          <div className="section">
              <h3>Future improvements</h3>
              <p>Due to the broadness of our initial proposition and the short amount of time we had to develop our platform, 
                our team made the decision to only focus on the IT sector. </p>
              <p>However, our project has the potential to be expanded to other areas that also have a collaborative aspect to them.
                Besides that, there is the opportunity to further improve our existing features, in terms of design or functionality, 
                and implement new ones. For example, a reward system based on the performance of each user.</p>
          </div>
          <div className="section">
              <h3>Github repository</h3>
              <p>The code for our project is available at https://github.com/Savider/matchbox. 
                From there, you can download and run the code to build the platform and try it out for yourself!</p>
          </div>
        </div>
    </div>
  );
}

export default Conclusions;