export const fileUpload = async (file) => {

    if (!file) throw Error('You have no files uploaded ')
    const cloudUrl = `https://api.cloudinary.com/v1_1/react-curso-app/upload`;
    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if (!resp.ok) throw new Error('Image could not be uploaded')
        const cloudResp = await resp.json();

        return cloudResp.secure_url;

    } catch (error) {
        console.error(error);
        throw new Error(error.message);
    }

}
