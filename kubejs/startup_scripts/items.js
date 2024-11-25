// Listen to item registry event


const $ShearsItem = Java.loadClass('net.minecraft.world.item.ShearsItem')
const $IProperties = Java.loadClass('net.minecraft.world.item.Item$Properties')
const $KubeJS = Java.loadClass('dev.latvian.mods.kubejs.KubeJS')

StartupEvents.registry('item', event => {
    // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
    // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
    event.create('witch_type_item').maxStackSize(1).glow(true).displayName("Ведьминские записки")

    event.create('lunar_coin').maxStackSize(64).displayName("Лунная монета")
    event.create('solar_coin').maxStackSize(64).displayName("Солнечная монета")
    event.create('arcane_coin').maxStackSize(64).displayName("Магическая монета")

    event.createCustom('diamond_shears', () => new $ShearsItem(new $IProperties().durability(1500).tab($KubeJS.tab))).displayName("Алмазные ножницы")

  })

StartupEvents.registry('block', event => {

//Katu Bricks
event.create('katubrick')
.material('stone')
.hardness(4)
.displayName('Кирпичи Katu') 
.tagBlock('minecraft:mineable/pickaxe') 

//Cash Register
event.create('cash_register')
.material('stone')
.hardness(4)
.displayName('Кассовый аппарат') 
.tagBlock('minecraft:mineable/pickaxe') 

// Carved Warped Logs
  event.create('carved_warped_1', 'cardinal')
  .model('kubejs:block/carved_warped_1')
  .material('wood')
  .hardness(2)
  .displayName('Вертикально вырезанная искажённая древесина') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_warped_2', 'cardinal')
  .model('kubejs:block/carved_warped_2')
  .material('wood')
  .hardness(2)
  .displayName('Горизонтально вырезанная искажённая древесина') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_warped_3', 'cardinal')
  .model('kubejs:block/carved_warped_3')
  .material('wood')
  .hardness(2)
  .displayName('Вырезанный верх из искажённой древесины') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_warped_4', 'cardinal')
  .model('kubejs:block/carved_warped_4')
  .material('wood')
  .hardness(2)
  .displayName('Вырезанный низ из искажённой древесины') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_warped_5', 'cardinal')
  .model('kubejs:block/carved_warped_5')
  .material('wood')
  .hardness(2)
  .displayName('Вырезанная неведомость из искажённой древесины') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_warped_6', 'cardinal')
  .model('kubejs:block/carved_warped_6')
  .material('wood')
  .hardness(2)
  .displayName('Вырезанный изгиб из искажённой древесины') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_warped_7', 'cardinal')
  .model('kubejs:block/carved_warped_7')
  .material('wood')
  .hardness(2)
  .displayName('Вырезанное нечто из искажённой древесины') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_warped_8', 'cardinal')
  .model('kubejs:block/carved_warped_8')
  .material('wood')
  .hardness(2)
  .displayName('Вырезанный голова из искажённой древесины') 
  .tagBlock('minecraft:mineable/axe') 

// Carved Acacia Logs
  event.create('carved_acacia_1', 'cardinal')
  .model('kubejs:block/carved_acacia_1')
  .material('wood')
  .hardness(2)
  .displayName('Вырезанный цветок из акациевой древесины')
  .tagBlock('minecraft:mineable/axe')

  event.create('carved_acacia_2', 'cardinal')
  .model('kubejs:block/carved_acacia_2')
  .material('wood')
  .hardness(2)
  .displayName('Вырезанный крест из акациевой древесины') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_acacia_3', 'cardinal')
  .model('kubejs:block/carved_acacia_3')
  .material('wood')
  .hardness(2)
  .displayName('Вырезанная скоба из акациевой древесины') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_acacia_4', 'cardinal')
  .model('kubejs:block/carved_acacia_4')
  .material('wood')
  .hardness(2)
  .displayName('Вырезанный край из акациевой древесины') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_acacia_5', 'cardinal')
  .model('kubejs:block/carved_acacia_5')
  .material('wood')
  .hardness(2)
  .displayName('Вырезанный алмаз из акациевой древесины') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_acacia_6', 'cardinal')
  .model('kubejs:block/carved_acacia_6')
  .material('wood')
  .hardness(2)
  .displayName('Вырезанные полосы из акациевой древесины') 
  .tagBlock('minecraft:mineable/axe') 

  //TODO - rotation
  event.create('carved_acacia_7', 'cardinal')
  .model('kubejs:block/carved_acacia_7')
  .material('wood')
  .hardness(2)
  .displayName('Вырезанный угол из акациевой древесины') 
  .tagBlock('minecraft:mineable/axe') 
  

  event.create('carved_acacia_8', 'cardinal')
  .model('kubejs:block/carved_acacia_8')
  .material('wood')
  .hardness(2)
  .displayName('Вырезанная галочка из акациевой древесины') 
  .tagBlock('minecraft:mineable/axe') 

// Carved Birch Logs
event.create('carved_birch_1', 'cardinal')
.model('kubejs:block/carved_birch_1')
.material('wood')
.hardness(2)
.displayName('Горизонтально вырезанная берёзовая древесина') 
.tagBlock('minecraft:mineable/axe') 

  //TODO - Rotation
  event.create('carved_birch_2', 'cardinal')
  .model('kubejs:block/carved_birch_2')
  .material('wood')
  .hardness(2)
  .displayName('Вырезанный конец из берёзовой древесины') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_birch_3', 'cardinal')
  .model('kubejs:block/carved_birch_3')
  .material('wood')
  .hardness(2)
  .displayName('Вырезанный интарсия из берёзовой древесины') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_birch_4', 'cardinal')
  .model('kubejs:block/carved_birch_4')
  .material('wood')
  .hardness(2)
  .displayName('Вырезанная арка из берёзовой древесины') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_birch_5', 'cardinal')
  .model('kubejs:block/carved_birch_5')
  .material('wood')
  .hardness(2)
  .displayName('Вырезанный рельеф из берёзовой древесины') 
  .tagBlock('minecraft:mineable/axe') 

  //TODO - Rotation
  event.create('carved_birch_6', 'cardinal')
  .model('kubejs:block/carved_birch_6')
  .material('wood')
  .hardness(2)
  .displayName('Вырезанный угол из берёзовой древесины') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_birch_7', 'cardinal')
  .model('kubejs:block/carved_birch_7')
  .material('wood')
  .hardness(2)
  .displayName('Вырезанная геральдическая лилия из берёзовой древесины') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_birch_8', 'cardinal')
  .model('kubejs:block/carved_birch_8')
  .material('wood')
  .hardness(2)
  .displayName('Вертикально вырезанная берёзовая древесина') 
  .tagBlock('minecraft:mineable/axe') 

// Carved Crimson Logs
event.create('carved_crimson_1', 'cardinal')
.model('kubejs:block/carved_crimson_1')
.material('wood')
.hardness(2)
.displayName('Вертикально вырезанная багровая древесина') 
.tagBlock('minecraft:mineable/axe') 

  event.create('carved_crimson_2', 'cardinal')
  .model('kubejs:block/carved_crimson_2')
  .material('wood')
  .hardness(2)
  .displayName('Горизонтально вырезанная багровая древесина') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_crimson_3', 'cardinal')
  .model('kubejs:block/carved_crimson_3')
  .material('wood')
  .hardness(2)
  .displayName('Вырезанный изгиб на багровой древесине') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_crimson_4', 'cardinal')
  .model('kubejs:block/carved_crimson_4')
  .material('wood')
  .hardness(2)
  .displayName('Вырезанный месяц на багровой древесине') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_crimson_5', 'cardinal')
  .model('kubejs:block/carved_crimson_5')
  .material('wood')
  .hardness(2)
  .displayName('Вырезанная звезда на багровой древесине') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_crimson_6', 'cardinal')
  .model('kubejs:block/carved_crimson_6')
  .material('wood')
  .hardness(2)
  .displayName('Горизонтально вырезанные руны на багровой древесине') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_crimson_7', 'cardinal')
  .model('kubejs:block/carved_crimson_7')
  .material('wood')
  .hardness(2)
  .displayName('Вертикально вырезанные руны на багровой древесине') 
  .tagBlock('minecraft:mineable/axe') 

  //TODO - Rotation
  event.create('carved_crimson_8', 'cardinal')
  .model('kubejs:block/carved_crimson_8')
  .material('wood')
  .hardness(2)
  .displayName('Вырезанный угол из багровой древесины') 
  .tagBlock('minecraft:mineable/axe') 

// Carved Dark Oak Logs
  event.create('carved_dark_oak_1', 'cardinal')
  .model('kubejs:block/carved_dark_oak_1')
  .material('wood')
  .hardness(2)
  .displayName('Вырезанная чешуя из древесины тёмного дуба') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_dark_oak_2', 'cardinal')
  .model('kubejs:block/carved_dark_oak_2')
  .material('wood')
  .hardness(2)
  .displayName('Вырезанные облака из древесины тёмного дуба') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_dark_oak_3', 'cardinal')
  .model('kubejs:block/carved_dark_oak_3')
  .material('wood')
  .hardness(2)
  .displayName('Горизонтально вырезанное тело дракона из древесины тёмного дуба') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_dark_oak_4', 'cardinal')
  .model('kubejs:block/carved_dark_oak_4')
  .material('wood')
  .hardness(2)
  .displayName('Вырезанная голова дракона из древесина тёмного дуба') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_dark_oak_5', 'cardinal')
  .model('kubejs:block/carved_dark_oak_5')
  .material('wood')
  .hardness(2)
  .displayName('Вертикально вырезанное тело дракона из древесины тёмного дуба') 
  .tagBlock('minecraft:mineable/axe') 

  //TODO - rotation
  event.create('carved_dark_oak_6', 'cardinal')
  .model('kubejs:block/carved_dark_oak_6')
  .material('wood')
  .hardness(2)
  .displayName('Вырезанные лапы дракона из древесины тёмного дуба') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_dark_oak_7', 'cardinal')
  .model('kubejs:block/carved_dark_oak_7')
  .material('wood')
  .hardness(2)
  .displayName('Вырезанный хвост дракона из древесины тёмного дуба') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_dark_oak_8', 'cardinal')
  .model('kubejs:block/carved_dark_oak_8')
  .material('wood')
  .hardness(2)
  .displayName('Вырезанный они из древесины тёмного дуба') 
  .tagBlock('minecraft:mineable/axe') 

// Carved Spruce Logs
  event.create('carved_spruce_1', 'cardinal')
  .model('kubejs:block/carved_spruce_1')
  .material('wood')
  .hardness(2)
  .displayName('Вырезанный орёл из еловой древесины') 
  .tagBlock('minecraft:mineable/axe') 

  //TODO - Rotation
  event.create('carved_spruce_2', 'cardinal')
  .model('kubejs:block/carved_spruce_2')
  .material('wood')
  .hardness(2)
  .displayName('Вырезанное крыло из еловой древесины') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_spruce_3', 'cardinal')
  .model('kubejs:block/carved_spruce_3')
  .material('wood')
  .hardness(2)
  .displayName('Вырезанные когти из еловой древесины') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_spruce_4', 'cardinal')
  .model('kubejs:block/carved_spruce_4')
  .material('wood')
  .hardness(2)
  .displayName('Вырезанный крестьянин из еловой древесины') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_spruce_5', 'cardinal')
  .model('kubejs:block/carved_spruce_5')
  .material('wood')
  .hardness(2)
  .displayName('Вырезанные лапы из еловой древесины') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_spruce_6', 'cardinal')
  .model('kubejs:block/carved_spruce_6')
  .material('wood')
  .hardness(2)
  .displayName('Вырезанный зверь из еловой древесины') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_spruce_7', 'cardinal')
  .model('kubejs:block/carved_spruce_7')
  .material('wood')
  .hardness(2)
  .displayName('Горизонтально вырезанная еловая древесина') 
  .tagBlock('minecraft:mineable/axe') 

  event.create('carved_spruce_8', 'cardinal')
  .model('kubejs:block/carved_spruce_8')
  .material('wood')
  .hardness(2)
  .displayName('Вертикально вырезанная еловая древесина') 
  .tagBlock('minecraft:mineable/axe') 

})

// Make Potions Stackable

ItemEvents.modification(event =>{
  event.modify('minecraft:potion', item =>{
    item.maxStackSize = 16
    })

  event.modify('minecraft:lingering_potion', item =>{
    item.maxStackSize = 16
    })

  event.modify('minecraft:splash_potion', item =>{
    item.maxStackSize = 16
    })
})