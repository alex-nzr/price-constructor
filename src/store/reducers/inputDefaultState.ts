import {
    DynamicBlockThemes,
    EBlockTypes,
    InputFieldNames,
    TRootBlocksState
} from "../../types/content-blocks";
import defaultMainImg from "../../components/Main/MainBlock/default.png";
import defaultLessonsImg from "../../assets/img/defaultLessonBlockImage.png";
import {getUniqueId} from "../actions/generalBlockActions";

const defaultLessonsBlockUid = getUniqueId("lessons");
const defaultEquipBlockUid = getUniqueId("equip");

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
            }
        }
    }
}

export default inputDefaultState;