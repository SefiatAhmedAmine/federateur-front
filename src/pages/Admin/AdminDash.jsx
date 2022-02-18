import React, { useEffect, useState } from 'react'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function AdminDash() {
  const [users, setUsers] = useState([])
  const [categories, setCategories] = useState([])
  const [posts, setPosts] = useState([])
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [loading3, setLoading3] = useState(true);

  useEffect(() => {
    fetch(process.env.REACT_APP_POSTS_URL)
      .then(response => {
        if (response.ok) {
          // console.log(response)
          return response.json();
          // return response.text();
        }
        throw response;
      })
      .then(data => {
        setPosts(data);
        // console.log(users);
      })
      .catch(error => {
        console.error("failed to catch data ", error);
      })
      .finally(()=>{
        setLoading1(false)
      })
  }, [])

  useEffect(() => {
    fetch(process.env.REACT_APP_USERS_URL)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then(data => {
        setUsers(data);
        // console.log(users);
      })
      .catch(error => {
        console.error("failed to catch data ", error);
      })
      .finally(()=>{
        setLoading2(false)
      })
  }, [])


  useEffect(() => {
    fetch(process.env.REACT_APP_CATEGORIES_URL)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then(data => {
        setCategories(data);
        // console.log(users);
      })
      .catch(error => {
        console.error("failed to catch data ", error);
      })
      .finally(()=>{
        setLoading3(false)
      })
  }, [])

  if (loading1 || loading2 || loading3) {
    return 'loading ...';    
  }

  let data = {};
  for (let i = 0; i < categories.length; i++) {
    var element = categories[i].name;
    data[element] = 0
  }

  for (let i = 0; i < posts.length; i++) {
    var element2 = posts[i].category.name;
    data[element2] += 1;
  }

  let stats = []
  for (var key in data) {
    stats.push({ name: key, value: data[key] })
  }


  return (
    <div>
      <h1>Dashboard</h1>
      <div style={{
        display: 'flex',
        width: '100 %',
        justifyContent: 'space-between',
      }} >
        <FeaturedInfo title="Comptes" moneyValue={users.length} />
        <FeaturedInfo title="Categories" moneyValue={categories.length} />
        <FeaturedInfo title="Postes" moneyValue={posts.length} />
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100 %',
        justifyContent: 'space-around',
        alignItems: 'center',
        boxShadow: '0px 0px 15px -10px #000000',
        marginTop: 20,

      }} >
        <h3 style={{ margin: "20px auto", }}>
          Posts par categorie
        </h3>
        {
          console.log(stats)
        }
        <ResponsiveContainer width="70%" height={400}>
          <BarChart
            width={"80%"}
            height={500}
            data={stats}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name"/>
            <YAxis />
            <Tooltip />
            <Legend formatter={()=> <span>nombre de postes</span> } />
            <Bar dataKey="value" fill="#8884d8"  formatter={()=> <span>nombre de postes</span> }/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div >
  )
}
