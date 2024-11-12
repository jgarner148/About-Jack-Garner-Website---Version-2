const isMaintenancemode = false

if(isMaintenancemode){
    document.head.innerHTML += `<meta http-equiv="refresh" content="0; maintenance.html" />`;
}