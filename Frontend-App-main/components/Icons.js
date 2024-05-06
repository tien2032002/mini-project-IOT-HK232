import { Feather, MaterialCommunityIcons, Ionicons, FontAwesome, AntDesign} from "@expo/vector-icons";

export default Icons = {
    //room icons
    LivingRoom: (size = 18, color = "white") => <MaterialCommunityIcons name="sofa-single" size={size} color={color} />,
    Bedroom: (size = 18, color = "white") => <Ionicons name="bed" size={size} color={color} />,
    //device icons
    Light: (size = 18, color = "white")=><MaterialCommunityIcons name="ceiling-light" size={size} color={color} />,
    AC: (size = 18, color = "white")=><Feather name="wind" size={size} color={color} />,
    CCTV: (size = 18, color = "white")=><MaterialCommunityIcons name="cctv" size={size} color={color} />,
    // ac mode icons
    SnowFlake: (size = 18, color = "white")=><FontAwesome name="snowflake-o" size={size} color={color} />,
    Fan: (size = 18, color = "white")=><MaterialCommunityIcons name="fan" size={size} color={color} />,
    Heat: (size = 18, color = "white")=><MaterialCommunityIcons name="white-balance-sunny" size={size} color={color} />,
    Dry: (size = 18, color = "white")=><Feather name="droplet" size={size} color={color} />,
    PowerOff: (size = 18, color = "white")=><AntDesign name="poweroff" size={size} color={color} />,
}

