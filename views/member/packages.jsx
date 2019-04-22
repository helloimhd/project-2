var React = require('react');
var MemberLayout = require('./memberLayout');

class Packages extends React.Component {
    render () {

        const packages = this.props.packages;
        // return the array of objects

        let allPackages = packages.map(obj => {
            return <div class="package-container">
                    <div class="packImg-container">
                        <img src={obj.img} class="img-fluid" />
                    </div>

                    <div class="title-container">
                        <h4>{obj.name}</h4>
                    </div>

                    <div class="details-container">
                        <h6>{obj.details}</h6>
                        <p>${obj.price}</p>
                    </div>
                </div>

        }) // end of map

        return (<MemberLayout>

            <h1>Packages</h1>
            <div class="packageMain-container">
                {allPackages}

            </div>

        </MemberLayout>)  // end of return

    }  // end of rendering
} // end of class

module.exports = Packages;