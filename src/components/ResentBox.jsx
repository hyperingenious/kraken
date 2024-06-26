import React from "react";
import "../css/ResentBoxStyle.css"

import folderIcon from "../assets/image 70.png"
import { useEditorContext } from "../context/EditorContext";

const { ipcRenderer } = window.require('electron');

function openEditorInFolder(path, setIsEditorOpen) {
  setIsEditorOpen(state => !state)
  // alert("opening editor in ", path)
}

function ResentBoxIn() {
  const { setIsEditorOpen } = useEditorContext();
  return (
    <div id="pre-box" onClick={() => { openEditorInFolder("/home/vishnu/house/Software/Flappuccino", setIsEditorOpen) }}>
      <div id="pre-box-head">Flappuccino</div>
      <div id="pre-box-path">/home/vishnu/house/Software/Flappuccino</div>
    </div>
  );
}
function openFolderHandler() {
  ipcRenderer.send("open-folder-selecter", "gg")
  ipcRenderer.on("open-folder-selecter-reply", (e, r) => {
    openEditorInFolder(r)
  })
}
function FolderBoxIn() {
  return (
    <div id="fol-box" onClick={openFolderHandler}>
      <img src={folderIcon} />
      Open Folder
    </div>
  )
}


export default function ResentBox() {
  return (
    <div id="boxof-pre">
      <FolderBoxIn />
      <ResentBoxIn />
      <ResentBoxIn />
      <ResentBoxIn />
      <ResentBoxIn />
      <ResentBoxIn />
    </div>
  );
}
