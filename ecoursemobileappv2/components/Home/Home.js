import { SafeAreaView, Text, View } from "react-native";
import MyStyle from "../../styles/MyStyle";
import { useEffect, useState } from "react";
import { ActivityIndicator, Chip } from "react-native-paper";
import Apis, { endpoints } from "../../configs/Apis";

const Home = () => {
    const [categories, setCategories] = useState([]);
    const [course, setCourse] = useState([]);
    const [loading, setLoading] = useState([]);

    const loadCates = async () => {
        let res = await Apis.get(endpoints['categories']);
            setCategories(res.data);
        
    }

    useEffect(() => {
        loadCates();
    }, []);

    return (
        <SafeAreaView>
            <Text style={MyStyle.subject}>DANH SACH KHOA HOC</Text>

            <View style={[MyStyle.row, MyStyle.wrap]}>
                {categories.map(c => <Chip icon="label" style={MyStyle.m} key={c.id}>{c.name}</Chip>)}
            </View>

            {loading && <ActivityIndicator/>}
        </SafeAreaView>
    );
}

export default Home;