
export const useAuthentication=async(address ,signer)=>{
    // signer.signMessage('{"method":"auth","date":"2023-12-07","nonce":1}').then(
    //     message => {
            fetch('http://124.156.177.144:8000/web3/player/verify', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    'accept': 'application/json'
                },
                body: JSON.stringify({
                    // address: address,
                    // message: '{"method":"auth","date":"2023-12-07","nonce":1}',
                    // signedData: message
                    address:'0x88D162f26E4bbBd768B9a2b16737b07B628047A2',
                    message:'{"method":"auth","date":"2023-12-07","nonce":1}',
                    signedData: '0xaf115a5be5d2d9c7d5f89ec7ce3e48701a25e3e1858505a08346ad70b224b60169e7a27389fc0fc438a649973a1c1c84794a6f7c6cfa259b812c4096286d991b1b'
                }),
            }).then(
                data => {
                    data.json().then(
                        result=> localStorage.setItem('Authorization',`Bearer ${result.data.token}`)
                    )
                 }
            )
        }
//     )
// }