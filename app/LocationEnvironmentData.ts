// 当前 DLC 本体与 Mod 有效版本；核对依据见 LOCATION_ENVIRONMENT_AUDIT.md。
type LocationEnvironment = { temperature: string; prosperity: string };

const surfaceClimate = "地表 Temperature 越接近 50%，Habitability（适居度）通常越高；过冷或过热都会降低适居度。地下地点的基础适居度固定为 50%。";
const food = "基础产粮＝12＋⌈0.1＋75×（Habitability−15%）⌉，再结算当地修正与兴趣点的产粮加成。";
const humanSurvival = "适居度低于 15% 时聚居地毁灭；人口超过承载上限时每回合减少 5，粮食不足则积累 Hunger / Famine。";
const tax = '<CrossReference name="Tax Citizens" href="#entry-place-ruler-base-act-taxcitizens" /> 完成时获得 ⌊0.45×人口×Prosperity⌋ Gold；繁荣度也影响统治者筹集储备金的意愿。';
const market = "当地有 Market 时，购买后的补货会随 Prosperity 提高而更容易出现稀有物品：超过 100% 的部分就是稀有概率，最高必定为稀有，例如 Prosperity 150% 对应 50%。";
const plunder = "Orc 军队夷平、Orc Raiders 掠夺此地的 Gold 收益也随人口×Prosperity 提高。";
const humanProsperity = "城防上限＝人口×Prosperity＋兴趣点防御加成；当地供养的常规军队基础最大 HP＝⌊人口×Prosperity⌋，再结算阵营与 Military Fervour 等军队加成。\n"+tax+"\n"+market+"\n"+plunder;
const noEconomy = "此地点不使用 Prosperity，也不结算居民税收与人口供养的常规军队。";

export const locationEnvironment: Record<string, LocationEnvironment> = {
  "location-set-city": {
    temperature: surfaceClimate+"\n人口上限＝12＋⌈0.1＋180×（Habitability−15%）⌉。\n"+food+" 可额外接收相邻、同势力小型人类聚居地的剩余粮食。\n"+humanSurvival,
    prosperity: humanProsperity,
  },
  "location-set-minorhuman": {
    temperature: surfaceClimate+"\n人口上限＝min（40，12＋⌈0.1＋90×（Habitability−15%）⌉）。\n"+food+" Farming Community / Mushroom Farm 将产粮翻倍；剩余粮食可供给相邻、同势力的 City 或 Dwarven City，因此气候变化也会影响这些城市的粮食。\n"+humanSurvival,
    prosperity: humanProsperity,
  },
  "location-set-dwarvencity": {
    temperature: "地下基础 Habitability 固定为 50%，因此当地 Temperature 的变化不改变这项基础适居度；地表矮人城市则使用通常的温度—适居度规则。\n人口上限＝2×［12＋⌈0.1＋90×（Habitability−15%）⌉］。地下默认上限 88。\n"+food+" 地下默认基础产粮 39，可接收相邻、同势力小型聚居地的剩余粮食。人口仅在低于人口上限的 80%、且低于可用粮食的 80% 时自然增长。\n"+humanSurvival,
    prosperity: "城防上限＝20＋人口×Prosperity＋兴趣点防御加成。\n供养的矮人军队以 ⌊人口×Prosperity⌋ 为基础，结算常规军队加成后再翻倍；因此繁荣度降低会同时削弱城防和驻军。\n"+tax+"\n"+market+"\n"+plunder,
  },
  "location-set-dwarvenoutpost": {
    temperature: "地下基础 Habitability 固定为 50%；地表矮人据点则由 Temperature 决定适居度，越靠近 50% 通常越宜居。\n人口上限＝min（40，12＋⌈0.1＋90×（Habitability−15%）⌉）；地下默认上限 40。\n"+food+" 地下默认基础产粮 39，Mushroom Farm 另将产粮翻倍。人口仅在低于人口上限的 80%、且低于可用粮食的 80% 时自然增长；剩余粮食可以供给相邻、同势力的城市。\n"+humanSurvival,
    prosperity: "城防上限＝20＋人口×Prosperity＋兴趣点防御加成；若据点供养常规军队，其基础最大 HP＝⌊人口×Prosperity⌋，再结算军队加成。\n"+tax+"\n"+market+"\n"+plunder,
  },
  "location-set-elvencity": {
    temperature: surfaceClimate+"\n人口上限＝12＋⌈0.1＋90×（Habitability−15%）⌉。\n"+food+" 精灵城市依靠本地产粮维持人口；人口仅在低于人口上限的 80%、且低于可用粮食的 80% 时自然增长。\nTemperature 高于 60% 时，城市每回合降温 1 个百分点；低于 40% 时每回合升温 1 个百分点，并向相邻格施加同向调整。仅在本地临时温差绝对值小于 10 个百分点时发动，邻格还要求临时温差绝对值小于 25 个百分点。\n"+humanSurvival,
    prosperity: humanProsperity,
  },
  "location-set-orccamp": {
    temperature: "Temperature 通过 Habitability 决定 Orc 能否定居及继续占据此地。默认需要至少 5% 适居度，门槛随 Orc Habitability 设置调整；低于门槛时部落放弃该地点，并清除无法保留的营地与兴趣点。地下基础适居度为 50%，地下扩张另需部落具备进入地下的能力。",
    prosperity: "Orc Camp 不使用 Prosperity。城防上限由营地基础值与 Orcish Defences 决定；军队规模由本地及相邻地点的 Orcish Industry 决定。",
  },
  "location-set-deeponeabyssalcity": {
    temperature: "Temperature 不参与深海城市的人口承载、食物或存续结算。人口由 Deep One Sanctum 转送、城市之间迁移等方式增加；人口超过 50 时按深海城市规则扩散。",
    prosperity: "此处不使用 Prosperity。城防上限固定为 50；城市与其兴趣点的功能按 Deep One 人口等独立条件运行。",
  },
  "location-set-deeponesanctum": {
    temperature: "Temperature 不决定圣所的存续与人口承载。圣所接收的转化人口会转送至 Abyssal City，按 Deep Ones 自身的转送规则结算。",
    prosperity: "此处不使用 Prosperity，城防上限固定为 50。原聚居地留下的兴趣点仍按各自规则提供功能。",
  },
  "location-set-cityruins": {
    temperature: "废墟本身没有人口、产粮或气候死亡结算。Temperature 仍影响此地的 Habitability，进而影响后续人类殖民据点的成长与 Orc 定居资格；重建成聚居地后，采用新聚居地的规则。",
    prosperity: "废墟不保留原城市的 Prosperity、税收与军队供养。重建后由新聚居地重新计算。",
  },
  "location-set-minorother": {
    temperature: "Temperature 通过 Habitability 影响此地未来的殖民与定居资格。当前作为野外兴趣点载体，不进行人类人口、产粮或气候死亡结算；各兴趣点仍有各自条件。",
    prosperity: noEconomy+" 当前功能由附属兴趣点与地点修正提供。",
  },
  "location-set-tombofgods": {
    temperature: "墓穴不按 Temperature 或 Habitability 结算人口、产粮及存续；温度变化仍会改变地表格子的适居度，地下基础适居度为 50%。",
    prosperity: noEconomy+" 墓穴的挑战、任务与封印相关机制按各自条件运行。",
  },
  "location-set-inundai-palace": {
    temperature: "Temperature 不参与宫殿人口和存续结算。宫殿按累计人口每达到 50 的新门槛生成一名 Inundai Emissary；这项生成与温度无关。",
    prosperity: "宫殿不使用 Prosperity，继承的城防上限为 50；核心进度由人口与 Inundai 的影响机制决定。",
  },
  "location-set-sunkenruins": {
    temperature: "沉没废墟不按 Temperature 结算居民人口、产粮或存续。作为海中废墟，其遗留内容与可执行行动取决于具体兴趣点。",
    prosperity: "此处不使用 Prosperity；保存的是沉没时的 Infrastructure，而非原聚居地的繁荣度经济。",
  },
  "location-set-nature-naturesanctuary": {
    temperature: "Temperature 通过 Habitability 影响自然保护区的作用。保护区令相邻地点的适居度增加 15 个百分点；来源保护区所在地的适居度低于 15% 时，这些邻地加成被移除。因此恶化保护区自身的气候，也会削弱周边聚居地的粮食与人口承载。",
    prosperity: noEconomy+" 此处防御为 0；它通过改善相邻地点的适居度帮助周边聚居地。",
  },
  "location-set-nature-unoccupiedwilderness": {
    temperature: "Temperature 仍决定该荒野的基础 Habitability；地表通常在 50% 附近最宜居，地下基础适居度为 50%。适居度继续影响当地的殖民资格及 Living Wilds 的自然环境效果；荒野本身不结算人类人口与粮食。",
    prosperity: noEconomy+" 此处防御为 0；Shadow 与野生单位活动按荒野自身规则运行。",
  },
  "location-set-nature-wolfrun": {
    temperature: "Temperature 通过 Habitability 直接影响此地防御：防御数值＝适居度的百分数，例如 Habitability 60% 时为 60。地表升温或降温只要使适居度下降，就会降低防御；地下基础适居度为 50%，Living Wilds 的适居度修正另行叠加。",
    prosperity: "此处不使用 Prosperity。防御由 Habitability 直接决定，狼人数量与血月活动按 Werewolf Run 自身机制运行。",
  },
  "location-set-shipwreck": {
    temperature: "Temperature 不参与沉船残骸的存续和打捞结算。该地点提供 Shipwreck 兴趣点，打捞按残骸本身的机制处理。",
    prosperity: noEconomy+" 打捞收益由 Shipwreck 的状态与相应行动决定。",
  },
};
