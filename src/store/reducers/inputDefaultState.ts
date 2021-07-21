import {
    DynamicBlockThemes,
    EBlockTypes,
    InputFieldNames,
    TRootBlocksState
} from "../../types/content-blocks";
import defaultMainImg from "../../components/Main/MainBlock/default.png";
import defaultLessonsImg from "../../assets/img/defaultLessonBlockImage.png";
import defaultEquipImg from "../../assets/img/defaultEquipBlockImage.png";
import {getUniqueId} from "../actions/generalBlockActions";

const defaultLessonsBlockUid = getUniqueId("lessons");
const defaultEquipBlockUid = getUniqueId("equip");
const defaultBottomTextBlockUid = getUniqueId("bottomText");
const defaultAdvantagesBlockUid = getUniqueId("advBlock");

const inputDefaultState: TRootBlocksState = {
    staticBlocks: {
        [EBlockTypes.footerBlock]:{
            [InputFieldNames.id]: EBlockTypes.footerBlock,
            [InputFieldNames.title]:"г. Челябинск | Срок действия предложения с 15 февраля 2021 по 30 июня 2021",
        },
        [EBlockTypes.mainBlock]:{
            [InputFieldNames.id]: EBlockTypes.mainBlock,
            [InputFieldNames.title]: "Инструмент для логопеда —<br>умное зеркало ArtikMe",
            [InputFieldNames.text]: "Ребёнок видит одновременно своё отражение и волшебный  мир, в котором живут сказочные персонажи. Они сопровождают ребёнка по зеркальному миру, дают задания и помогают их выполнить. Педагог на своём компьютере может скорректировать процесс занятия, учитывая индивидуальные возможности ребёнка, создать занятия на любые лексические темы с помощью загруженного или своего фото-, видео- или аудио-материала",
            [InputFieldNames.image]: defaultMainImg,
            [InputFieldNames.list]: {
                0: "мотивируйте детей к занятиям",
                1: "создавайте индивидуальный маршрут",
                2: "развивайте самостоятельность и самоконтроль"
            }
        },
        [EBlockTypes.priceBlock]: {
            [InputFieldNames.id]: EBlockTypes.priceBlock,
            [InputFieldNames.theme]: DynamicBlockThemes.priceBlock,
            [InputFieldNames.text]: "Они сопровождают ребёнка по зеркальному миру, дают задания и помогают их выполнить.",
            [InputFieldNames.priceOneValue]: 140000,
            [InputFieldNames.priceTwoValue]: 180000,
            [InputFieldNames.priceOneText]: "Цена без ноутбука",
            [InputFieldNames.priceTwoText]: "Цена с ноутбуком",
        }
    },
    dynamicBlocks: {
        [EBlockTypes.additionalBlocks]: {
            [defaultLessonsBlockUid]: {
                [InputFieldNames.id]: defaultLessonsBlockUid,
                [InputFieldNames.theme]: DynamicBlockThemes.classicListBlock,
                [InputFieldNames.title]: "Блоки занятий:",
                [InputFieldNames.image]: defaultLessonsImg,
                [InputFieldNames.list]: {
                    0: "Артикуляционная гимнастика: 33 упражнения",
                    1: "Дыхательная гимнастика: 14 упражнений",
                    2: "Конструктор: педагог может самостоятельно создавать занятия, загружать изображения, записывать аудиоинструкцию."
                }
            },
            [defaultEquipBlockUid]: {
                [InputFieldNames.id]: defaultEquipBlockUid,
                [InputFieldNames.theme]: DynamicBlockThemes.textBlock,
                [InputFieldNames.title]: "В комплект входит:",
                [InputFieldNames.text]: "конструкция «Умное зеркало» со встроенным оборудованием (монитор, видеокамера, колонки, микрофон), методическое пособие, методическая и техническая поддержка.",
                [InputFieldNames.image]: defaultEquipImg,

                [InputFieldNames.titleSecond]: "Размеры:",
                [InputFieldNames.textSecond]: "ширина: 720мм / высота: 450мм / глубина: 80мм вес: 13,7кг",
            },
            [defaultBottomTextBlockUid]: {
                [InputFieldNames.id]: defaultBottomTextBlockUid,
                [InputFieldNames.theme]: DynamicBlockThemes.textOnlyBlock,
                [InputFieldNames.text]: "Для использования нужен только ноутбук",
            }
        },
        [EBlockTypes.singleBlocks]: {
            [defaultAdvantagesBlockUid]: { //this block not used yet
                [InputFieldNames.id]: defaultAdvantagesBlockUid,
                [InputFieldNames.theme]: DynamicBlockThemes.advantagesBlock,
                [InputFieldNames.list]: {
                    0: "47 занятий",
                    1: "конструктор занятий",
                    2: "для детей 4-10 лет",
                    3: "подходит для детей с ОВЗ",
                }
            }
        }
    }
}

export default inputDefaultState;