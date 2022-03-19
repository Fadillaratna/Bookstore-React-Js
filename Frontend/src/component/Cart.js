import React from 'react'

class Cart extends React.Component {
    constructor() {
        super()
        this.state = {
            cart: [], // untuk menyimpan list cart
            user: "", // untuk menyimpan data nama user
            total: 0, // untuk menyimpan data total belanja
        }
    }

    initCart = () => {
        // memanggil data cart pada localStorage
        let tempCart = []
        if (localStorage.getItem("cart") !== null) {
            tempCart = JSON.parse(localStorage.getItem("cart"))
        }
        // memanggil data user pada localStorage
        let userName = sessionStorage.getItem("user")
        // kalkulasi total harga
        let totalHarga = 0;
        tempCart.map(item => {
            totalHarga += (item.harga * item.jumlahBeli)
        })
        // memasukkan data cart, user, dan total harga pada state
        this.setState({
            cart: tempCart,
            user: userName,
            total: totalHarga
        })
    }

    componentDidMount() {
        this.initCart()
    }


    render() {
        return (
            <div className="container my-3">
                <div className='col-md-12 col-lg-12 order-md-last'>
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="display-6 fw-light mt-5">{this.state.user}'s cart</span>
                        <span className="badge bg-success rounded-pill"></span>
                    </h4>
                    <ul className="list-group ">
                        { this.state.cart.map( (item, index) =>
                            (
                            <li className="list-group-item d-flex justify-content-between">{item.judul}<br></br>
                                {item.jumlahBeli} x Rp {item.harga} <p className='fs-6 fw-bold'>Rp { item.harga * item.jumlahBeli },00</p></li>
                                ) ) }
                           
                        </ul>
                    <li className="list-group-item d-flex justify-content-between fw-bolder">
                            <span>Total</span>Rp. {this.state.total},00
                        </li>


                </div>
                {/* <div className="card col-12 mt-2">
                    <div className="card-header bg-primary text-white">
                        <h4>Data Keranjang Belanja</h4>
                    </div>
                    <div className="card-body">
                        <h5 className="text-primary">
                        </h5><br></br>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Nama Item</th>
                                    <th>Harga</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.cart.map((item, index) =>
                                (
                                    <tr key={index}>
                                        <td>{item.judul}</td>
                                        <td>Rp {item.harga}</td>
                                        <td>{item.jumlahBeli}</td>
                                        <td>
                                            Rp {item.harga * item.jumlahBeli}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <h4 className="text-danger">
                            Total Harga: Rp {this.state.total}
                        </h4>
                    </div>
                </div> */}

            </div>


        )
    }
}

export default Cart;