// controller.mjs
import users from "./data.mjs";

// lihat data
const index = () => {
  const daftar = users.map((user, i) => {
    return `${i + 1}. ${user.nama} | ${user.umur} tahun | ${user.alamat} | ${user.email}`;
  });
  console.log(daftar.join("\n"));
};

// tambah data
const store = (user) => {
  users.push(user);
};

// hapus data terakhir
const destroy = () => {
  users.pop();
};

export { index, store, destroy };