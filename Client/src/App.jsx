import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
    this.data = [{url: "https://pngimg.com/uploads/kfc/kfc_PNG53.png", category: "fast food"}, {url: "https://miro.medium.com/max/2000/1*6JDbWUZmpWT_reZbXAaj4g.png", category: "fast food"}, {url: "https://1000logos.net/wp-content/uploads/2016/10/Burger-King-Logo-1999.jpg", category: "fast food"}, {url: "https://assets.digitalservices.ggp.com/content/dam/rw-2/images/tenant-images/tenant-logos/urban-plates-logo-553x260-v1.png", category: "fast casual"}, {url: "https://pentagram-production.imgix.net/46f2abce-623b-49fb-a780-99a519dff4d0/ps_tendergreens_03.jpg?rect=%2C%2C%2C&w=640&fm=jpg&q=70&auto=format", category:"fast casual"}, {url: "https://sandiegofoodbank.org/wp-content/uploads/2020/09/Mendocino-Farms-Logo-Pulled-from-Google.png", category: "fast casual"}, {url: "https://www.climateweeknyc.org/sites/default/files/styles/large/public/honeygrow_edit.jpg?itok=cBavZTek", category: "fast casual"}, {url: "https://16jhl82mq2imp4wet2y0c7og-wpengine.netdna-ssl.com/wp-content/uploads/2010/01/Chick-fil-A-Logo-Update-RBMM.jpg", category: "fast food"}]

  }

  render() {
    return(
      <div>
        <h1 id="header">The Market for X</h1>
        <div id="container">
          <div id="fastFood">
            <h3 className="categoryHeader">Fast Food</h3>
            {this.data.map((data) => {
              if (data.category === "fast food") {
                return (
                  <img className="logo" src={data.url}></img>
                )
              }
            })}
          </div>
          <div id="fastCasual">
            <h3 className="categoryHeader">Fast Casual</h3>
            {this.data.map((data) => {
              if (data.category === "fast casual") {
                return (
                  <img className="logo" src={data.url}></img>
                )
              }
            })}
          </div>
          <div id="upscale">
          <h3 className="categoryHeader">Upscale</h3>
          {this.data.map((data) => {
            if (data.category === "upscale") {
              return(
                <img className="logo" src={data.url}></img>
              )
            }
          })}
          </div>
        </div>
      </div>

    )
  }
}

export default App