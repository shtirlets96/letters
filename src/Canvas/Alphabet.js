export function printLetter(ctx, letter, x, y) {
  switch (letter) {
    case 'а':
    case 'А':
      ctx.lineTo(x, y - 12)
      ctx.lineTo(x + 6, y - 12)
      ctx.lineTo(x + 6, y)
      ctx.moveTo(x + 6, y - 6)
      ctx.lineTo(x, y - 6)
      break;
    case 'б':
    case "Б":
      ctx.lineTo(x + 6, y)
      ctx.lineTo(x + 6, y - 6)
      ctx.lineTo(x, y - 6)
      ctx.moveTo(x, y)
      ctx.lineTo(x, y - 12)
      ctx.lineTo(x + 6, y - 12)
      break
    case "В":
    case "в":
      ctx.lineTo(x, y - 12)
      ctx.lineTo(x + 6, y - 12)
      ctx.lineTo(x + 6, y)
      ctx.lineTo(x, y)
      ctx.moveTo(x, y - 6)
      ctx.lineTo(x + 6, y - 6)
      break
    case "Г":
    case "г":
      ctx.lineTo(x, y - 12)
      ctx.lineTo(x + 6, y - 12)
      break
    case "Д":
    case "д":
      ctx.lineTo(x, y - 3)
      ctx.lineTo(x + 6, y - 3)
      ctx.lineTo(x + 6, y)
      ctx.moveTo(x + 1, y - 3)
      ctx.lineTo(x + 1, y - 12)
      ctx.lineTo(x + 5, y - 12)
      ctx.lineTo(x + 5, y - 3)
      break
    case "Е":
    case "е":
    case "Ё":
    case "ё":
      ctx.lineTo(x, y - 12)
      ctx.lineTo(x + 6, y - 12)
      ctx.moveTo(x + 6, y)
      ctx.lineTo(x, y)
      ctx.moveTo(x, y - 6)
      ctx.lineTo(x + 6, y - 6)
      break
    case "ж":
    case "Ж":
      ctx.lineTo(x + 6, y - 12)
      ctx.moveTo(x, y - 12)
      ctx.lineTo(x + 6, y)
      ctx.moveTo(x + 3, y)
      ctx.lineTo(x + 3, y - 12)
      break
    case "з":
    case "З":
      ctx.moveTo(x, y - 12)
      ctx.lineTo(x + 6, y - 12)
      ctx.lineTo(x, y - 6)
      ctx.lineTo(x + 6, y - 6)
      ctx.lineTo(x, y)
      break
    case "и":
    case "И":
      ctx.moveTo(x, y - 12)
      ctx.lineTo(x, y)
      ctx.lineTo(x + 6, y - 12)
      ctx.lineTo(x + 6, y)
      break
    case "й":
    case "Й":
      ctx.moveTo(x, y - 12)
      ctx.lineTo(x, y)
      ctx.lineTo(x + 6, y - 12)
      ctx.lineTo(x + 6, y)
      ctx.moveTo(x + 2, y - 12)
      ctx.lineTo(x + 4, y - 12)
      break
    case "к":
    case "К":
      ctx.lineTo(x, y - 12)
      ctx.moveTo(x, y - 6)
      ctx.lineTo(x + 6, y - 12)
      ctx.moveTo(x, y - 6)
      ctx.lineTo(x + 6, y)
      break
    case "л":
    case "Л":
      ctx.lineTo(x + 3, y - 12)
      ctx.lineTo(x + 6, y)
      break
    case "м":
    case "М":
      ctx.lineTo(x, y - 12)
      ctx.lineTo(x + 3, y)
      ctx.lineTo(x + 6, y - 12)
      ctx.lineTo(x + 6, y)
      break
    case "н":
    case "Н":
      ctx.lineTo(x, y - 12)
      ctx.moveTo(x + 6, y - 12)
      ctx.lineTo(x + 6, y)
      ctx.moveTo(x, y - 6)
      ctx.lineTo(x + 6, y - 6)
      break
    case "о":
    case "О":
      ctx.lineTo(x, y - 12)
      ctx.lineTo(x + 6, y - 12)
      ctx.lineTo(x + 6, y)
      ctx.lineTo(x, y)
      break
    case "п":
    case "П":
      ctx.lineTo(x, y - 12)
      ctx.lineTo(x + 6, y - 12)
      ctx.lineTo(x + 6, y)
      break
    case "р":
    case "Р":
      ctx.lineTo(x, y - 12)
      ctx.lineTo(x + 6, y - 12)
      ctx.lineTo(x + 6, y - 6)
      ctx.lineTo(x, y - 6)
      break
    case "С":
    case "с":
      ctx.lineTo(x, y - 12)
      ctx.lineTo(x + 6, y - 12)
      ctx.moveTo(x + 6, y)
      ctx.lineTo(x, y)
      break
    case "т":
    case "Т":
      ctx.moveTo(x - 1, y - 12)
      ctx.lineTo(x + 7, y - 12)
      ctx.moveTo(x + 3, y - 12)
      ctx.lineTo(x + 3, y)
      break
    case "у":
    case "У":
      ctx.lineTo(x + 6, y - 12)
      ctx.moveTo(x + 3, y - 6)
      ctx.lineTo(x, y - 12)
      break
    case "ф":
    case "Ф":
      ctx.moveTo(x + 3, y)
      ctx.lineTo(x + 3, y - 12)
      ctx.moveTo(x, y - 12)
      ctx.lineTo(x + 6, y - 12)
      ctx.lineTo(x + 6, y - 6)
      ctx.lineTo(x, y - 6)
      ctx.lineTo(x, y - 12)
      break
    case "х":
    case "Х":
      ctx.lineTo(x + 6, y - 12)
      ctx.moveTo(x, y - 12)
      ctx.lineTo(x + 6, y)
      break
    case "ц":
    case "Ц":
      ctx.moveTo(x, y - 12)
      ctx.lineTo(x, y)
      ctx.lineTo(x + 6, y)
      ctx.lineTo(x + 6, y - 12)
      ctx.moveTo(x + 6, y)
      ctx.lineTo(x + 8, y)
      ctx.lineTo(x + 8, y + 2)
      break
    case "ч":
    case "Ч":
      ctx.moveTo(x, y - 12)
      ctx.lineTo(x, y - 6)
      ctx.lineTo(x + 6, y - 6)
      ctx.moveTo(x + 6, y - 12)
      ctx.lineTo(x + 6, y)
      break
    case "ш":
    case "Ш":
      ctx.moveTo(x, y - 12)
      ctx.lineTo(x, y)
      ctx.lineTo(x + 6, y)
      ctx.lineTo(x + 6, y - 12)
      ctx.moveTo(x + 3, y)
      ctx.lineTo(x + 3, y - 12)
      break
    case "щ":
    case "Щ":
      ctx.moveTo(x, y - 12)
      ctx.lineTo(x, y)
      ctx.lineTo(x + 6, y)
      ctx.lineTo(x + 6, y - 12)
      ctx.moveTo(x + 3, y)
      ctx.lineTo(x + 3, y - 12)
      ctx.moveTo(x + 6, y)
      ctx.lineTo(x + 8, y)
      ctx.lineTo(x + 8, y + 2)
      break
    case "Ъ":
    case "ъ":
      ctx.lineTo(x, y - 12)
      ctx.moveTo(x + 6, y - 6)
      ctx.lineTo(x + 6, y)
      ctx.lineTo(x, y)
      ctx.moveTo(x, y - 6)
      ctx.lineTo(x + 6, y - 6)
      ctx.moveTo(x, y - 12)
      ctx.lineTo(x - 2, y - 12)
      break
    case "Ы":
    case "ы":
      ctx.lineTo(x, y - 12)
      ctx.moveTo(x, y)
      ctx.lineTo(x + 3, y)
      ctx.lineTo(x + 3, y - 6)
      ctx.lineTo(x, y - 6)
      ctx.moveTo(x + 6, y)
      ctx.lineTo(x + 6, y - 12)
      break
    case "Ь":
    case "ь":
      ctx.lineTo(x, y - 12)
      ctx.moveTo(x + 6, y - 6)
      ctx.lineTo(x + 6, y)
      ctx.lineTo(x, y)
      ctx.moveTo(x, y - 6)
      ctx.lineTo(x + 6, y - 6)
      break
    case "э":
    case "Э":
      ctx.moveTo(x, y - 12)
      ctx.lineTo(x + 6, y - 12)
      ctx.lineTo(x + 6, y)
      ctx.lineTo(x, y)
      ctx.moveTo(x, y - 6)
      ctx.lineTo(x + 6, y - 6)
      break
    case "ю":
    case "Ю":
      ctx.lineTo(x, y - 12)
      ctx.moveTo(x, y - 6)
      ctx.lineTo(x + 2, y - 6)
      ctx.moveTo(x + 2, y)
      ctx.lineTo(x + 2, y - 12)
      ctx.lineTo(x + 6, y - 12)
      ctx.lineTo(x + 6, y)
      ctx.lineTo(x + 2, y)
      break
    case "я":
    case "Я":
      ctx.moveTo(x + 6, y)
      ctx.lineTo(x + 6, y - 12)
      ctx.lineTo(x, y - 12)
      ctx.lineTo(x, y - 6)
      ctx.lineTo(x + 6, y - 6)
      ctx.lineTo(x, y)
      break
    case " ":
      break
    default:
  }
}