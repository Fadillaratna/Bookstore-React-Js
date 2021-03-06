import React from 'react';
import $ from 'jquery';
import axios from 'axios';

class Pegawai extends React.Component {
  constructor() {
    super();
    this.state = {
      pegawai: [], // array pegawai untuk menampung data pegawai
      nip: "",
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
      nip: "",
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
      nip: item.nip,
      nama: item.nama,
      alamat: item.alamat,
      action: "update",
      selectedItem: item
    });
  }

  getPegawai = () => {
    let url = "http://localhost:2910/pegawai";
    // mengakses api untuk mengambil data pegawai
    axios.get(url)
      .then(response => {
        // mengisikan data dari respon API ke array pegawai
        this.setState({ pegawai: response.data.pegawai });
      })
      .catch(error => {
        console.log(error);
      });
  }


  searching = event => {
    if (event.keyCode === 13) {
      // 13 adalah kode untuk tombol enter
      let keyword = this.state.keyword.toLowerCase()
      let tempSiswa = this.state.siswa
      let result = tempSiswa.filter(item => {
        return item.nis.toLowerCase().includes(keyword) ||
          item.nama.toLowerCase().includes(keyword) ||
          item.alamat.toLowerCase().includes(keyword)
      })
      this.setState({ siswa: result })
    }
  }

  findPegawai = (event) => {
    let url = "http://localhost:2910/pegawai";
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
          this.setState({ pegawai: response.data.pegawai });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }


  SavePegawai = (event) => {
    event.preventDefault();
    /* menampung data nip, nama dan alamat dari Form
    ke dalam FormData() untuk dikirim */
    let form = {
      nip: this.state.nip,
      nama: this.state.nama,
      alamat: this.state.alamat
    }
    if (this.state.action === "insert") {
      // mengirim data ke API untuk disimpan pada database
      axios.post("http://localhost:2910/pegawai/save", form)
        .then(response => {
          // jika proses simpan berhasil, memanggil data yang terbaru
          this.getPegawai();
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      axios.put("http://localhost:2910/pegawai/update", form)
        .then(response => {
          // jika proses simpan berhasil, memanggil data yang terbaru
          this.getPegawai();
        })
        .catch(error => {
          console.log(error);
        });
    }
    // menutup form modal
    $("#modal").hide()
  }

  Drop = (nip) => {
    let url = "http://localhost:2910/pegawai/" + nip;
    // memanggil url API untuk menghapus data pada database
    if (window.confirm('Apakah Anda yakin ingin menghapus data ini?')) {
      axios.delete(url)
        .then(response => {
          // jika proses hapus data berhasil, memanggil data yang terbaru
          this.getPegawai();
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
  componentDidMount() {
    // method yang pertama kali dipanggil pada saat load page
    this.getPegawai()
  }


  render() {
    return (
      <div className="container mb-4"> <br></br>
        <h4 className="d-flex justify-content-between align-items-center">
          <span className="display-6 fw-light mt-5">Officer's Data</span>
        </h4><br></br>
        <div className="tombol mb-5">
          <div className='pegawai'>
            <button type="button" className='btn btn-dark' id="blue" onClick={() => this.Add()} data-toggle="modal" data-target="#modal"><i className="fa fa-plus me-2"></i>Add Officer</button>
          </div>
          <div className="input">
            <input type="text" name="search" value={this.state.search} onChange={this.bind} onKeyUp={this.findPegawai} className="form-control form-input" placeholder="Find Spine's Officer" id="search" />
          </div>
        </div>


        <table className="table">
          <thead>
            <tr>
              <th>NIP</th>
              <th>Name</th>
              <th>Address</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {this.state.pegawai.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.nip}</td>
                  <td>{item.nama}</td>
                  <td>{item.alamat}</td>
                  <td>
                    <button className="btn btn-sm btn-outline-dark m-1" data-toggle="modal" data-target="#modal" onClick={() => this.Edit(item)}><i className="fa fa-pencil"></i></button>
                    <button className="btn btn-sm btn-dark m-1" id="blue" onClick={() => this.Drop(item.nip)}><i className="fa fa-trash"></i></button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <br></br>


        {/* component modal sbg control manipulasi data */}
        <div className="modal modal" id="modal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title"><b>Officer's Data</b></h4>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => this.Close()}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={this.SavePegawai}>
                  NIP
                  <input type="number" name="nip" value={this.state.nip} onChange={this.bind} className="form-control mb-2" required />
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

export default Pegawai;