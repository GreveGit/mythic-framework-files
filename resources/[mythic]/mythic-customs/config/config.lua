_customsConfig = {}

_customsConfig.repairCost = {
    400,
    500,
    750,
    1000,
}

_customsConfig.cost = {
    livery = 600,
    extras = 400,
    pearlescentColor = 250,
    wheelColor = 250,
    interiorColor = 250,
    plateIndex = 300,
    tyreSmoke = 1000,
    tyreSmokeColor = 350,
    windowTint = 550,

    neonEnabled = 500,
    mods = {
        engine = { 2500, 5000, 7500, 10000, 15000 },
        brakes = { 2000, 3000, 4000, 6000, 7000 },
        transmission = { 2000, 3500, 5000, 7500, 10000 },
        suspension = { 500, 750, 800, 900, 1000 },
        turbo = 2000,

        horns = 500,

        xenon = 500,
        xenonColor = 2500,

        frontWheels = 700,
        backWheels = 350,
        aerials = 120,
        spoilers = 950,
        frontBumper = 750,
        rearBumper = 750,
        sideSkirt = 500,
        exhaust = 675,
        frame = 250,
        grille = 500,
        hood = 895,
        fender = 500,
        rightFender = 500,
        roof = 700,
        plateHolder = 500,
        vanityPlate = 500,
        trimA = 350,
        trimB = 350,
        ornaments = 150,
        dashboard = 200,
        dial = 150,
        doorSpeaker = 200,
        seats = 300,
        steeringWheel = 275,
        shifterLeavers = 200,
        aPlate = 450,
        speakers = 695,
        trunk = 700,
        engineBlock = 800,
        airFilter = 225,
        struts = 400,
        archCover = 180,
        tank = 410,
        windows = 240,
    }
}

_customsConfig.paintCost = 750

_customsConfig.neonPresetsNamed = {
    { label = 'No Change', value = 0 },
    { label = 'None', value = 1 },
    { label = 'All', value = 2 },
    { label = 'Left & Right', value = 3 },
    { label = 'Front & Rear', value = 4 },
    { label = 'Front Only', value = 5 },
    { label = 'Rear Only', value = 6 },
    { label = 'Front, Left & Right', value = 7 },
    { label = 'Rear, Left & Right', value = 8 },
}

_customsConfig.neonPresets = {
    { false, false, false, false },
    { true, true, true, true },
    { true, true, false, false },
    { false, false, true, true },
    { false, false, true, false },
    { false, false, false, true },
    { true, true, true, false },
    { true, true, false, true },
}

_customsConfig.plateIndexes = {
    { label = 'Blue on White Regular', value = 0 },
    { label = 'Yellow on Black', value = 1 },
    { label = 'Yellow on Blue', value = 2 },
    { label = 'Blue on White Classic', value = 3 },
}

_customsConfig.pearlescents = {
    { label = "Black", value = 0 },
    { label = "Carbon Black", value = 147 },
    { label = "Graphite", value = 1 },
    { label = "Anhracite Black", value = 11 },
    { label = "Black Steel", value = 11 },
    { label = "Dark Steel", value = 3 },
    { label = "Silver", value = 4 },
    { label = "Bluish Silver", value = 5 },
    { label = "Rolled Steel", value = 6 },
    { label = "Shadow Silver", value = 7 },
    { label = "Stone Silver", value = 8 },
    { label = "Midnight Silver", value = 9 },
    { label = "Cast Iron Silver", value = 10 },
    { label = "Red", value = 27 },
    { label = "Torino Red", value = 28 },
    { label = "Formula Red", value = 29 },
    { label = "Lava Red", value = 150 },
    { label = "Blaze Red", value = 30 },
    { label = "Grace Red", value = 31 },
    { label = "Garnet Red", value = 32 },
    { label = "Sunset Red", value = 33 },
    { label = "Cabernet Red", value = 34 },
    { label = "Wine Red", value = 143 },
    { label = "Candy Red", value = 35 },
    { label = "Hot Pink", value = 135 },
    { label = "Pfsiter Pink", value = 137 },
    { label = "Salmon Pink", value = 136 },
    { label = "Sunrise Orange", value = 36 },
    { label = "Orange", value = 38 },
    { label = "Bright Orange", value = 138 },
    { label = "Gold", value = 99 },
    { label = "Bronze", value = 90 },
    { label = "Yellow", value = 88 },
    { label = "Race Yellow", value = 89 },
    { label = "Dew Yellow", value = 91 },
    { label = "Dark Green", value = 49 },
    { label = "Racing Green", value = 50 },
    { label = "Sea Green", value = 51 },
    { label = "Olive Green", value = 52 },
    { label = "Bright Green", value = 53 },
    { label = "Gasoline Green", value = 54 },
    { label = "Lime Green", value = 92 },
    { label = "Midnight Blue", value = 141 },
    { label = "Galaxy Blue", value = 61 },
    { label = "Dark Blue", value = 62 },
    { label = "Saxon Blue", value = 63 },
    { label = "Blue", value = 64 },
    { label = "Mariner Blue", value = 65 },
    { label = "Harbor Blue", value = 66 },
    { label = "Diamond Blue", value = 67 },
    { label = "Surf Blue", value = 68 },
    { label = "Nautical Blue", value = 69 },
    { label = "Racing Blue", value = 73 },
    { label = "Ultra Blue", value = 70 },
    { label = "Light Blue", value = 74 },
    { label = "Chocolate Brown", value = 96 },
    { label = "Bison Brown", value = 101 },
    { label = "Creeen Brown", value = 95 },
    { label = "Feltzer Brown", value = 94 },
    { label = "Maple Brown", value = 97 },
    { label = "Beechwood Brown", value = 103 },
    { label = "Sienna Brown", value = 104 },
    { label = "Saddle Brown", value = 98 },
    { label = "Moss Brown", value = 100 },
    { label = "Woodbeech Brown", value = 102 },
    { label = "Straw Brown", value = 99 },
    { label = "Sandy Brown", value = 105 },
    { label = "Bleached Brown", value = 106 },
    { label = "Schafter Purple", value = 71 },
    { label = "Spinnaker Purple", value = 72 },
    { label = "Midnight Purple", value = 142 },
    { label = "Bright Purple", value = 145 },
    { label = "Cream", value = 107 },
    { label = "Ice White", value = 111 },
    { label = "Frost White", value = 112 }
}

_customsConfig.windowTints = {

}

_customsConfig.performanceMods = {
    { mod = 'engine', id = 11, name = 'Engine' },
    { mod = 'brakes', id = 12, name = 'Brakes' },
    { mod = 'transmission', id = 13, name = 'Transmission' },
    { mod = 'suspension', id = 15, name = 'Suspension' },
}

_customsConfig.bodyParts = {
    { mod = 'horns', id = 14, name = 'Horn' },
    { mod = 'spoilers', id = 0, name = 'Spoilers' },
    { mod = 'frontBumper', id = 1, name = 'Front Bumper' },
    { mod = 'rearBumper', id = 2, name = 'Rear Bumper' },
    { mod = 'sideSkirt', id = 3, name = 'Side Skirts' },
    { mod = 'exhaust', id = 4, name = 'Exhaust' },
    { mod = 'frame', id = 5, name = 'Roll Cage' },
    { mod = 'grille', id = 6, name = 'Grille' },
    { mod = 'hood', id = 7, name = 'Hood' },
    { mod = 'fender', id = 8, name = 'Left Fender' },
    { mod = 'rightFender', id = 9, name = 'Right Fender' },
    { mod = 'roof', id = 10, name = 'Roof' },
    { mod = 'archCover', id = 42, name = 'Arch Cover' },
    { mod = 'trunk', id = 37, name = 'Trunk' },
    { mod = 'plateHolder', id = 25, name = 'Plate Holder' },
    { mod = 'vanityPlate', id = 26, name = 'Vanity Plate' },
    { mod = 'trimA', id = 27, name = 'Trim A' },
    { mod = 'trimB', id = 44, name = 'Trim B' },
    { mod = 'aerials', id = 43, name = 'Aerials' },

    { mod = 'windows', id = 45, name = 'Windows' },

    { mod = 'ornaments', id = 28, name = 'Ornaments' },
    { mod = 'dashboard', id = 29, name = 'Dashboard' },
    { mod = 'dial', id = 30, name = 'Dials' },
    { mod = 'doorSpeaker', id = 31, name = 'Door Speaker' },
    { mod = 'seats', id = 32, name = 'Seats' },
    { mod = 'steeringWheel', id = 33, name = 'Steering Wheel' },
    { mod = 'shifterLeavers', id = 34, name = 'Shifter Leaver' },
    { mod = 'aPlate', id = 35, name = 'Plaque' },
    { mod = 'speakers', id = 36, name = 'Speaker' },
    
    { mod = 'hydrolic', id = 38, name = 'Hydraulic' },
    { mod = 'engineBlock', id = 39, name = 'Engine Block' },
    { mod = 'airFilter', id = 40, name = 'Air Filter' },
    { mod = 'struts', id = 41, name = 'Struts' },
    { mod = 'tank', id = 45, name = 'Fuel Tank' },
}

_customsConfig.windowTints = {
    { label = "Stock", value = -1 },
    { label = "None", value = 0 },
    { label = "Pure Black", value = 1 },
    { label = "Dark Smoke", value = 2 },
    { label = "Light Smoke", value = 3 },
    { label = "Limo", value = 5 },
    { label = "Green", value = 6 },
}

_customsConfig.neons = {
    { name = 'Front', id = 3 },
    { name = 'Rear', id = 4 },
    { name = 'Left', id = 1 },
    { name = 'Right', id = 2 },
}


_customsConfig.hornList = {
    { label = "Stock Horn", value = -1 },
    { label = "Truck Horn", value = 0 },
    { label = "Cop Horn", value = 1 },
    { label = "Clown Horn", value = 2 },
    { label = "Musical Horn 1", value = 3 },
    { label = "Musical Horn 2", value = 4 },
    { label = "Musical Horn 3", value = 5 },
    { label = "Musical Horn 4", value = 6 },
    { label = "Musical Horn 5", value = 7 },
    { label = "Sad Trombone", value = 8 },
    { label = "Classical Horn 1", value = 9 },
    { label = "Classical Horn 2", value = 10 },
    { label = "Classical Horn 3", value = 11 },
    { label = "Classical Horn 4", value = 12 },
    { label = "Classical Horn 5", value = 13 },
    { label = "Classical Horn 6", value = 14 },
    { label = "Classical Horn 7", value = 15 },
    { label = "Scale - Do", value = 16 },
    { label = "Scale - Re", value = 17 },
    { label = "Scale - Mi", value = 18 },
    { label = "Scale - Fa", value = 19 },
    { label = "Scale - Sol", value = 20 },
    { label = "Scale - La", value = 21 },
    { label = "Scale - Ti", value = 22 },
    { label = "Scale - Do", value = 23 },
    { label = "Jazz Horn 1", value = 24 },
    { label = "Jazz Horn 2", value = 25 },
    { label = "Jazz Horn 3", value = 26 },
    { label = "Jazz Horn Loop", value = 27 },
    { label = "Star Spangled Banner 1", value = 28 },
    { label = "Star Spangled Banner 2", value = 29 },
    { label = "Star Spangled Banner 3", value = 30 },
    { label = "Star Spangled Banner 4", value = 31 },
    { label = "Classical Horn 8 Loop", value = 32 },
    { label = "Classical Horn 9 Loop", value = 33 },
    { label = "Classical Horn 10 Loop", value = 34 },
    { label = "Classical Horn 8", value = 35 },
    { label = "Classical Horn 9", value = 36 },
    { label = "Classical Horn 10", value = 37 },
    { label = "Funeral Loop", value = 38 },
    { label = "Funeral", value = 39 },
    { label = "Spooky Loop", value = 40 },
    { label = "Spooky", value = 41 },
    { label = "San Andreas Loop", value = 42 },
    { label = "San Andreas", value = 43 },
    { label = "Liberty City Loop", value = 44 },
    { label = "Liberty City", value = 45 },
    { label = "Festive 1 Loop", value = 46 },
    { label = "Festive 1", value = 47 },
    { label = "Festive 2 Loop", value = 48 },
    { label = "Festive 2", value = 49 },
    { label = "Festive 3 Loop", value = 50 },
    { label = "Festive 3", value = 51 }
}

_customsConfig.wheelTypes = {
    { label = 'Sport', value = 0 },
    { label = 'Muscle', value = 1 },
    { label = 'Lowrider', value = 2 },
    { label = 'SUV', value = 3 },
    { label = 'Offroad', value = 4 },
    { label = 'Tuner', value = 5 },
    { label = 'Motorcycle', value = 6, },
    { label = 'Highend', value = 7, },
}

_customsConfig.allColors = {
    { label = "Black", value = 0 },
    { label = "Carbon Black", value = 147 },
    { label = "Graphite", value = 1 },
    { label = "Anhracite Black", value = 11 },
    { label = "Black Steel", value = 11 },
    { label = "Dark Steel", value = 3 },
    { label = "Silver", value = 4 },
    { label = "Bluish Silver", value = 5 },
    { label = "Rolled Steel", value = 6 },
    { label = "Shadow Silver", value = 7 },
    { label = "Stone Silver", value = 8 },
    { label = "Midnight Silver", value = 9 },
    { label = "Cast Iron Silver", value = 10 },
    { label = "Red", value = 27 },
    { label = "Torino Red", value = 28 },
    { label = "Formula Red", value = 29 },
    { label = "Lava Red", value = 150 },
    { label = "Blaze Red", value = 30 },
    { label = "Grace Red", value = 31 },
    { label = "Garnet Red", value = 32 },
    { label = "Sunset Red", value = 33 },
    { label = "Cabernet Red", value = 34 },
    { label = "Wine Red", value = 143 },
    { label = "Candy Red", value = 35 },
    { label = "Hot Pink", value = 135 },
    { label = "Pfsiter Pink", value = 137 },
    { label = "Salmon Pink", value = 136 },
    { label = "Sunrise Orange", value = 36 },
    { label = "Orange", value = 38 },
    { label = "Bright Orange", value = 138 },
    { label = "Gold", value = 99 },
    { label = "Bronze", value = 90 },
    { label = "Yellow", value = 88 },
    { label = "Race Yellow", value = 89 },
    { label = "Dew Yellow", value = 91 },
    { label = "Dark Green", value = 49 },
    { label = "Racing Green", value = 50 },
    { label = "Sea Green", value = 51 },
    { label = "Olive Green", value = 52 },
    { label = "Bright Green", value = 53 },
    { label = "Gasoline Green", value = 54 },
    { label = "Lime Green", value = 92 },
    { label = "Midnight Blue", value = 141 },
    { label = "Galaxy Blue", value = 61 },
    { label = "Dark Blue", value = 62 },
    { label = "Saxon Blue", value = 63 },
    { label = "Blue", value = 64 },
    { label = "Mariner Blue", value = 65 },
    { label = "Harbor Blue", value = 66 },
    { label = "Diamond Blue", value = 67 },
    { label = "Surf Blue", value = 68 },
    { label = "Nautical Blue", value = 69 },
    { label = "Racing Blue", value = 73 },
    { label = "Ultra Blue", value = 70 },
    { label = "Light Blue", value = 74 },
    { label = "Chocolate Brown", value = 96 },
    { label = "Bison Brown", value = 101 },
    { label = "Creeen Brown", value = 95 },
    { label = "Feltzer Brown", value = 94 },
    { label = "Maple Brown", value = 97 },
    { label = "Beechwood Brown", value = 103 },
    { label = "Sienna Brown", value = 104 },
    { label = "Saddle Brown", value = 98 },
    { label = "Moss Brown", value = 100 },
    { label = "Woodbeech Brown", value = 102 },
    { label = "Straw Brown", value = 99 },
    { label = "Sandy Brown", value = 105 },
    { label = "Bleached Brown", value = 106 },
    { label = "Schafter Purple", value = 71 },
    { label = "Spinnaker Purple", value = 72 },
    { label = "Midnight Purple", value = 142 },
    { label = "Bright Purple", value = 145 },
    { label = "Cream", value = 107 },
    { label = "Ice White", value = 111 },
    { label = "Frost White", value = 112 },

    { label = "Matte Black", value = 12 },
    { label = "Matte Gray", value = 13 },
    { label = "Matte Light Gray", value = 14 },
    { label = "Matte White", value = 131 },
    { label = "Matte Blue", value = 83 },
    { label = "Matte Dark Blue", value = 82 },
    { label = "Matte Midnight Blue", value = 84 },
    { label = "Matte Midnight Purple", value = 149 },
    { label = "Matte Schafter Purple", value = 148 },
    { label = "Matte Red", value = 39 },
    { label = "Matte Dark Red", value = 40 },
    { label = "Matte Orange", value = 41 },
    { label = "Matte Yellow", value = 42 },
    { label = "Matte Lime Green", value = 55 },
    { label = "Matte Green", value = 128 },
    { label = "Matte Forest Green", value = 151 },
    { label = "Matte Foliage Green", value = 155 },
    { label = "Matte Olive Darb", value = 152 },
    { label = "Matte Dark Earth", value = 153 },
    { label = "Matte Desert Tan", value = 154 },

    { label = "Brushed Steel", value = 117 },
    { label = "Brushed Black Steel", value = 118 },
    { label = "Brushed Aluminum", value = 119 },
    { label = "Pure Gold", value = 158 },
    { label = "Brushed Gold", value = 159 },

    { label = "Chrome", value = 120 },
}