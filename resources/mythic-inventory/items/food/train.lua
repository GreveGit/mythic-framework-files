_itemsSource["last_train"] = {
    {
		name = "rootbeerfloat",
		label = "Root Beer Float",
		price = 0,
		isUsable = true,
		isRemoved = true,
		isStackable = 3,
		type = 1,
		rarity = 1,
		closeUi = true,
		weight = 0.25,
		statusChange = {
			Add = {
				PLAYER_HUNGER = 10,
				PLAYER_THIRST = 90,
			},
            Remove = {
				PLAYER_STRESS = 10,
			}
		},
		animConfig = {
			anim = "drink",
			time = 10000,
			pbConfig = {
				label = "Drinking",
				useWhileDead = false,
				canCancel = true,
				vehicle = false,
				disarm = true,
				ignoreModifier = true,
				disableMovement = false,
				disableCarMovement = false,
				disableMouse = false,
				disableCombat = true,
			},
		},
		metalic = false,
		isDestroyed = true,
	},
    {
		name = "milkshake",
		label = "Explosive Shake",
		price = 0,
		isUsable = true,
		isRemoved = true,
		isStackable = 5,
		type = 1,
		rarity = 1,
		closeUi = true,
		weight = 0.25,
		statusChange = {
			Add = {
				PLAYER_HUNGER = 20,
				PLAYER_THIRST = 80,
			},
		},
		animConfig = {
			anim = "drink",
			time = 10000,
			pbConfig = {
				label = "Drinking",
				useWhileDead = false,
				canCancel = true,
				vehicle = false,
				disarm = true,
				ignoreModifier = true,
				disableMovement = false,
				disableCarMovement = false,
				disableMouse = false,
				disableCombat = true,
			},
		},
		metalic = false,
		isDestroyed = true,
        energyModifier = {
			modifier = 1.2,
			duration = 6, -- not seconds?
			cooldown = 60, -- seconds
			skipScreenEffects = true,
		},
        armourModifier = 10,
	},
    {
		name = "chocolate_shake",
		label = "Chocolate Shake",
		price = 0,
		isUsable = true,
		isRemoved = true,
		isStackable = 5,
		type = 1,
		rarity = 1,
		closeUi = true,
		weight = 0.25,
		statusChange = {
			Add = {
				PLAYER_HUNGER = 20,
				PLAYER_THIRST = 80,
			},
		},
        stressTicks = { "3", "3", "3", "5", "5", "5", },
		animConfig = {
			anim = "drink",
			time = 10000,
			pbConfig = {
				label = "Drinking",
				useWhileDead = false,
				canCancel = true,
				vehicle = false,
				disarm = true,
				ignoreModifier = true,
				disableMovement = false,
				disableCarMovement = false,
				disableMouse = false,
				disableCombat = true,
			},
		},
		metalic = false,
		isDestroyed = true,
        energyModifier = {
			modifier = 1.2,
			duration = 6, -- not seconds?
			cooldown = 60, -- seconds
			skipScreenEffects = true,
		},
	},
    {
		name = "chickenpotpie",
		label = "Chicken Pot Pie",
        description = "A truly hearty meal",
		price = 0,
		isUsable = true,
		isRemoved = true,
		isStackable = 2,
		type = 1,
		rarity = 1,
		closeUi = true,
		weight = 0.25,
		statusChange = {
			Add = {
				PLAYER_HUNGER = 100,
			},
		},
        stressTicks = { "6", "6", "6" },
		animConfig = {
			anim = "eat",
			time = 15000,
			pbConfig = {
				label = "Eating",
				useWhileDead = false,
				canCancel = true,
				vehicle = false,
				disarm = true,
				ignoreModifier = true,
				disableMovement = false,
				disableCarMovement = false,
				disableMouse = false,
				disableCombat = true,
			},
		},
		metalic = false,
		isDestroyed = true,
		healthModifier = 15,
	},
    {
		name = "chickenfriedsteak",
		label = "Chicken Fried Steak",
		price = 0,
		isUsable = true,
		isRemoved = true,
		isStackable = 2,
		type = 1,
		rarity = 1,
		closeUi = true,
		weight = 0.25,
		statusChange = {
			Add = {
				PLAYER_HUNGER = 100,
			},
            Ignore = {
				PLAYER_STRESS = 15,
			},
		},
		animConfig = {
			anim = "eat",
			time = 15000,
			pbConfig = {
				label = "Eating",
				useWhileDead = false,
				canCancel = true,
				vehicle = false,
				disarm = true,
				ignoreModifier = true,
				disableMovement = false,
				disableCarMovement = false,
				disableMouse = false,
				disableCombat = true,
			},
		},
		metalic = false,
		isDestroyed = true,
	},
    {
		name = "salisbury_steak",
		label = "Salisbury Steak",
		price = 0,
		isUsable = true,
		isRemoved = true,
		isStackable = 2,
		type = 1,
		rarity = 1,
		closeUi = true,
		weight = 0.25,
		statusChange = {
			Add = {
				PLAYER_HUNGER = 100,
			},
		},
        stressTicks = { "6", "6", "6" },
		animConfig = {
			anim = "eat",
			time = 15000,
			pbConfig = {
				label = "Eating",
				useWhileDead = false,
				canCancel = true,
				vehicle = false,
				disarm = true,
				ignoreModifier = true,
				disableMovement = false,
				disableCarMovement = false,
				disableMouse = false,
				disableCombat = true,
			},
		},
		metalic = false,
		isDestroyed = true,
		healthModifier = 15,
	},
    {
		name = "baconeggbiscuit",
		label = "Bacon & Egg Biscuit",
		price = 0,
		isUsable = true,
		isRemoved = true,
		isStackable = 2,
		type = 1,
		rarity = 1,
		closeUi = true,
		weight = 0.25,
		statusChange = {
			Add = {
				PLAYER_HUNGER = 100,
			},
            Ignore = {
				PLAYER_STRESS = 20,
			},
		},
		animConfig = {
			anim = "eat",
			time = 15000,
			pbConfig = {
				label = "Eating",
				useWhileDead = false,
				canCancel = true,
				vehicle = false,
				disarm = true,
				ignoreModifier = true,
				disableMovement = false,
				disableCarMovement = false,
				disableMouse = false,
				disableCombat = true,
			},
		},
		metalic = false,
		isDestroyed = true,
		armourModifier = 15,
	},
    {
		name = "sloppyjoe",
		label = "Sloppy Joe",
		price = 0,
		isUsable = true,
		isRemoved = true,
		isStackable = 2,
		type = 1,
		rarity = 1,
		closeUi = true,
		weight = 0.25,
		statusChange = {
			Add = {
				PLAYER_HUNGER = 100,
			},
            Ignore = {
				PLAYER_STRESS = 20,
			},
		},
		animConfig = {
			anim = "eat",
			time = 15000,
			pbConfig = {
				label = "Eating",
				useWhileDead = false,
				canCancel = true,
				vehicle = false,
				disarm = true,
				ignoreModifier = true,
				disableMovement = false,
				disableCarMovement = false,
				disableMouse = false,
				disableCombat = true,
			},
		},
		metalic = false,
		isDestroyed = true,
		armourModifier = 10,
	},
}