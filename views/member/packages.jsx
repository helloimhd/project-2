var React = require('react');
var MemberLayout = require('./memberLayout');

class Packages extends React.Component {
    render () {

        const packages = this.props.packages;
        // return the array of objects

        let allPackages = packages.map(obj => {
            return <div class="package-container">
                    <div class="image-container">
                        <img src="https://images.cdn3.stockunlimited.net/clipart/letter-a-with-dripping-blood_1499397.jpg" class="img-fluid" />
                    </div>

                    <div class="title-container">
                        <h3>{obj.name}</h3>
                    </div>

                    <div class="details-container">
                        <p>{obj.details}</p>
                    </div>
                </div>

        }) // end of map

        return (<MemberLayout>

            <div class="main-container">
                <div class="header-container">
                    <h1>Packages</h1>
                </div>

                {allPackages}

                <button class="btn btn-primary btn-lg float-right"><a href="/rent">Rent</a></button>
            </div>

        </MemberLayout>)  // end of return

    }  // end of rendering
} // end of class

module.exports = Packages;