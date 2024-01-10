export const useGetTeams = async() => {
    const authorization = localStorage.getItem('Authorization')
    let list
    const data = await fetch('http://124.156.177.144:8000/web3/team/list', {
        method: 'POST',
        headers: {
            "Authorization": authorization,
            "Content-Type": "application/json",
            'accept': '*/*',
        },
        body:JSON.stringify(
            {
                "orderBy": "string",
                "orderType": "string",
                "pageNum": 1,
                "pageSize": 10
              }
        )
    })
    const res = await data.json()
    list = res.data.list
    return list
}
