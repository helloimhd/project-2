var React = require('react');
var MemberLayout = require('./memberLayout');

class Rent extends React.Component {
    render () {

        const rentPackages = this.props.rentPackages;
        // return the array of objects


        let allPackages = rentPackages.map(obj => {
            const link = `/rent/${obj.id}`;

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

                    <a class="btn btn-primary" href={link} role="button">Select</a>
                </div>

        }) // end of map

        return (<MemberLayout>

            <div class="main-container">
                <div class="header-container">
                    <h1>Packages</h1>
                </div>

                {allPackages}

            </div>

        </MemberLayout>)  // end of return

    }  // end of rendering
} // end of class

module.exports = Rent;