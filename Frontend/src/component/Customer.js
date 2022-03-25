import React from 'react';
import $ from 'jquery';
import axios from 'axios';

class Customer extends React.Component {
    constructor() {
        super();
        this.state = {
            customer: [],
            id: "",
            nama: "",
            alamat: "",
            action: "",
            search: "",
        }
    }

    bind = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    Close = () => {
        $("#modal").hide()
    }

    Add = () => {
        // mengosongkan isi variabel nip, nama, dan alamat
        // set action menjadi "insert"
        $("#modal").show()
        this.setState({
            id: "",
            nama: "",
            alamat: "",
            action: "insert"
        });
    }

    Edit = (item) => {
        /*
        - mengisikan isi variabel nip, nama, alamat sesuai dengan data yang
        akan diedit
        - set action menjadi "update"
        */
        // menampilkan komponen modal
        $("#modal").show()
        this.setState({
            id: item.id,
            nama: item.nama,
            alamat: item.alamat,
            action: "update",
            selectedItem: item
        });
    }

    getCustomer = () => {
        let url = "http://localhost:2910/customer";
        // mengakses api untuk mengambil data pegawai
        axios.get(url)
            .then(response => {
                // mengisikan data dari respon API ke array pegawai
                this.setState({ customer: response.data.customer });
            })
            .catch(error => {
                console.log(error);
            });
    }


    findCustomer = (event) => {
        let url = "http://localhost:2910/customer";
        if (event.keyCode === 13) {
            // menampung data keyword pencarian
            let form = {
                find: this.state.search
            }
            // mengakses api untuk mengambil data pegawai
            // berdasarkan keyword
            axios.post(url, form)
                .then(response => {
                    // mengisikan data dari respon API ke array pegawai
                    this.setState({ customer: response.data.customer });
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }


    SaveCustomer = (event) => {
        event.preventDefault();
        /* menampung data nip, nama dan alamat dari Form
        ke dalam FormData() untuk dikirim */
        let form = {
            id: this.state.id,
            nama: this.state.nama,
            alamat: this.state.alamat
        }

        if (this.state.action === "insert") {
            axios.post("http://localhost:2910/customer/save", form)
                .then(response => {
                    // jika proses simpan berhasil, memanggil data yang terbaru
                    this.getCustomer();
                })
                .catch(error => {
                    console.log(error);
                });

        } else {
            axios.put("http://localhost:2910/customer/update", form)
                .then(response => {
                    // jika proses simpan berhasil, memanggil data yang terbaru
                    this.getCustomer();
                })
                .catch(error => {
                    console.log(error);
                });
        }
        $("#modal").hide()
    }

    Drop = (id) => {
        let url = "http://localhost:2910/customer/" + id;
        // memanggil url API untuk menghapus data pada database
        if (window.confirm('Apakah Anda yakin ingin menghapus data ini?')) {
            axios.delete(url)
                .then(response => {
                    // jika proses hapus data berhasil, memanggil data yang terbaru
                    this.getCustomer();
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
    componentDidMount() {
        // method yang pertama kali dipanggil pada saat load page
        this.getCustomer()
    }


    render() {
        return (
            <div className="container mb-4"> <br></br>

                <h4 className="d-flex justify-content-between align-items-center">
                    <span className="display-6 fw-light mt-5">Customer's Data</span>
                </h4><br></br>
                <div className="tombol mb-5">
                    <div className='pegawai'>
                        <button type="button" className='btn btn-dark' id="blue" onClick={() => this.Add()} data-toggle="modal" data-target="#modal"><i className="fa fa-plus me-2"></i>Add Buyer</button>
                    </div>
                    <div className="input">
                        <input type="text" name="search" value={this.state.search} onChange={this.bind} onKeyUp={this.findCustomer} class="form-control form-input" placeholder="Find Spine's Customer" id="search" />
                    </div>
                </div>


                <table className="table">
                    <thead>
                        <tr>
                            <th>Customer ID</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Option</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.customer.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.nama}</td>
                                    <td>{item.alamat}</td>
                                    <td>
                                        <button className="btn btn-sm btn-outline-dark m-1" data-toggle="modal" data-target="#modal" onClick={() => this.Edit(item)}><i className="fa fa-pencil"></i></button>
                                        <button className="btn btn-sm btn-dark m-1" id="blue" onClick={() => this.Drop(item.id)}><i className="fa fa-trash"></i></button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <br></br>


                {/* component modal sbg control manipulasi data */}
                <div className="modal modal" id="modal">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title"><b>Customer's Data</b></h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => this.Close()}></button>
                            </div>
                            <div class="modal-body">
                                <form onSubmit={this.SaveCustomer}>
                                    ID
                                    <input type="text" name="id" value={this.state.id} onChange={this.bind} className="form-control mb-2" required />
                                    Name
                                    <input type="text" name="nama" value={this.state.nama} onChange={this.bind} className="form-control mb-2" required />
                                    Address
                                    <input type="text" name="alamat" value={this.state.alamat} onChange={this.bind} className="form-control mb-2" required />
                                    <button className="btn btn-dark btn-block" id="blue" type="submit">
                                        Save
                                    </button>
                                </form>
                                <br></br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Customer;