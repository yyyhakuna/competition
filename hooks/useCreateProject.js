export const useCreateProject=(props,hash)=>{
    const authorization = localStorage.getItem('Authorization')
    fetch('http://124.156.177.144:8000/web3/project/create',{
        method:'POST',
        headers:{
            "Authorization": authorization,
            "Content-Type":"application/json",
            'accept': '*/*',
        },
        body:JSON.stringify({
            "banner":props.banner?props.banner:'',
            "demoUrl":props.demoUrl?props.demoUrl:'',
            "discordUrl":props.discordUrl?props.discordUrl:'',
            "introduction":props.introduction?props.introduction:'',
            "logo":props.logo?props.logo:'',
            "name":props.name?props.name:'',
            "telegramUrl":props.telegramUrl?props.telegramUrl:'',
            "traceId":props.telegramUrl?props.telegramUrl:0,
            "twitterUrl":props.twitterUrl?props.twitterUrl:'',
            "tx":hash
        })
    }).then(
        data=>{
            console.log(data);
            data.json().then(()=>{
            res=>console.log(res)
        })}
    )
}