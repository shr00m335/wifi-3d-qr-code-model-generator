import QRCode from "qrcode";

export const generateWiFiCode = async (
	ssid: string,
	password: string,
	hidden: boolean,
	errorCorrectionLevel?: QRCode.QRCodeErrorCorrectionLevel | undefined
): Promise<Uint8Array> => {
	let content: string = "";
	if (password.length === 0) {
		content = `WIFI:T:nopass;S:${ssid};;`;
	} else {
		content = hidden
			? `WIFI:T:WPA;S:${ssid};P:${password};H:true;;`
			: `WIFI:T:WPA;S:${ssid};P:${password};;`;
	}
	const qr = QRCode.create(content, {
		errorCorrectionLevel
	});
	return qr.modules.data;
};
