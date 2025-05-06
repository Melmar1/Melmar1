import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#FFD700',
                headerStyle: {
                    backgroundColor: '#25292e',
                },
                headerShadowVisible: false,
                headerTintColor: '#fff',
                tabBarStyle: {
                    backgroundColor: 'rgb(117, 217, 248)',
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: 'bold',
                }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Página inicial",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'speedometer-outline' : 'speedometer'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: 'Página final',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'car-sport-outline' : 'car-sport'} color={color} size={24} />
                    ),
                }}
            />
            <Tabs.Screen
                name="toDoList"
                options={{
                    title: 'Lista de Tarefas',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'list-circle-outline' : 'list-circle'} color={color} size={24} />
                    ),
                }}
            />
        </Tabs>
    );
}