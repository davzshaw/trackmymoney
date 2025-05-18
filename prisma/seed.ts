import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const categorias = [
    'Alimentación',
    'Transporte',
    'Entretenimiento',
    'Facturas',
    'Otros'
  ]

  for (const categoria of categorias) {
    await prisma.categoria.upsert({
      where: { nombre: categoria },
      update: {},
      create: { nombre: categoria },
    })
  }

  console.log('Categorías inicializadas correctamente')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 