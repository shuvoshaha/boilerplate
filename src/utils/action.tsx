export const getStatus = (code: number | string) => {
    switch (code) {
        case "45":
            return "Active";

        case "-2":
            return "Others"

        case "42":
            return "Lapsed";

        case "45":
            return "Auto Surrendered"

        case "20":
            return "Active"

        default:
            return "N/A"
    }
}

export const getBase64Download = (data: any, name: any) => {
    var bufferArray = base64ToArrayBuffer(data);
    var blobStore = new Blob([bufferArray], { type: "application/pdf" });
    // if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    //     window?.navigator?.msSaveOrOpenBlob(blobStore);
    //     return;
    // }
    var res = window.URL.createObjectURL(blobStore);
    var link = document.createElement('a');
    document.body.appendChild(link);
    link.href = res;
    link.download = `${name}.pdf`;
    link.click();
    window.URL.revokeObjectURL(res);
    link.remove();
}


function base64ToArrayBuffer(data: any) {
    var bString = window.atob(data);
    var bLength = bString.length;
    var bytes = new Uint8Array(bLength);
    for (var i = 0; i < bLength; i++) {
      var ascii = bString.charCodeAt(i);
      bytes[i] = ascii;
    }
    return bytes;
  };
