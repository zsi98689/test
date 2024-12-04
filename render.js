const { Client } = require('minecraft-launcher-core');

const fs = require('fs')

const Launcher = new Client

const runFileButton = document.getElementById('launch');
runFileButton.addEventListener('click', () => {
  const nickInput = document.getElementById("nick").value
  let opt = {
    authorization: {
      access_token: '',
      client_token: '',
      uuid: '',
      name: nickInput,
      user_properties: '{}',
      meta: {
          type: 'mojang' || 'msa',
          demo: false, 
          xuid: '',
          clientId: ''
      }
  },
  clientPackage: "https://www.dropbox.com/scl/fi/i7tcw8a679wkrcdouxnos/config.zip?rlkey=7t6zro0ehkubangaj1ziigzfq&st=k9cler57&dl=1",
  root: "./minecraft",
  version: {
      number: "1.19.4",
      type: "release"

  },
  desattached: true,
  detached: true,
  desattaced: true,
  forge: "./minecraft/forge-1.19.4-45.3.0-installer.jar",
  memory: {
      max: "4G",
      min: "3G"
  }
  }
  document.getElementById("nick").disabled = true;
  Launcher.launch(opt)
  Launcher.on('debug', (e) => console.log(e));
  Launcher.on('data', (e) => console.log(e));
  Launcher.on('data', (e) => {
    document.getElementById("status").textContent = e
    document.getElementById("fondo").style.display = "none";
    document.getElementById("download-screen").style.display = "none";
  })
  Launcher.on('download', (e) => {
    document.getElementById("fondo").style.display = "block";
    document.getElementById("download-screen").style.display = "block";
    document.getElementById("descarga").textContent = e

  })
  document.getElementById("launch").classList.add("activo")
});

Launcher.on("close", () => {
  document.getElementById("launch").classList.remove("activo")
  document.getElementById("nick").disabled = false;
})
