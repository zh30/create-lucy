import fs from 'node:fs'
import path from 'node:path'
// import { fileURLToPath } from 'node:url'
// import prompts from 'prompts'

// const cwd = process.cwd()
// const renameFiles: Record<string, string | undefined> = {
//   _gitignore: '.gitignore',
// }
// const defaultTargetDir = 'lucygoon'

const init = async () => {
  // const response = await prompts([
  //   {
  //     type: 'text',
  //     name: 'packageName',
  //     message: 'Input your packageName.',
  //     initial: defaultTargetDir
  //   },
  //   // 需要从状态管理，部署方式，数据请求方式进行选择
  //   {
  //     type: 'select',
  //     name: 'state',
  //     message: 'Pick your state management.',
  //     choices: [
  //       { title: 'Web', description: 'Web', value: 'h5' },
  //       { title: 'Taro', description: 'Taro Mini Programs', value: 'taro' }
  //     ],
  //     initial: 0
  //   },
  //   {
  //     type: 'select',
  //     name: 'deploy',
  //     message: 'Pick your deploy.',
  //     choices: (platform) => {
  //       if (platform === 'h5') {
  //         return [
  //           { title: 'Vue', value: 'vue' },
  //           { title: 'React', value: 'react' }
  //         ]
  //       } else if (platform === 'taro') {
  //         return [
  //           { title: 'Vue', value: 'vue' },
  //           { title: 'React', value: 'react', disabled: true }
  //         ]
  //       }
  //       return null
  //     },
  //     initial: 0
  //   },
  //   {
  //     type: (framework) => {
  //       return framework === 'vue' ? 'select' : null
  //     },
  //     name: 'nutui',
  //     message: 'Pick the version of nutui.',
  //     choices: (framework) => {
  //       if (framework === 'vue') {
  //         return [
  //           { title: 'NutUI 4', value: 'nutui4' },
  //           { title: 'NutUI 3', value: 'nutui3', disabled: true }
  //         ]
  //       }
  //       return null
  //     },
  //     initial: 0
  //   },
  // ]);
  // const { packageName, platform, framework, nutui } = response
  // let tool = ''
  // let target = ''
  // if (platform === 'h5') {
  //   tool = 'vite'
  // } else {
  //   tool = 'webpack'
  // }
  // if (framework === 'vue') {
  //   target = `template-${platform}-${framework}-${tool}-${nutui}`
  // } else {
  //   target = `template-${platform}-${framework}-${tool}-nutui`
  // }
  // let targetDir = packageName || defaultTargetDir
  // const root = path.join(cwd, targetDir)

  // if (!fs.existsSync(root)) {
  //   fs.mkdirSync(root, { recursive: true })
  // }

  // const pkgInfo = pkgFromUserAgent(process.env.npm_config_user_agent)
  // const pkgManager = pkgInfo ? pkgInfo.name : 'npm'

  // const templateDir = path.resolve(
  //   fileURLToPath(import.meta.url),
  //   '../..',
  //   target,
  // )

  // const write = (file: string, content?: string) => {
  //   const targetPath = path.join(root, renameFiles[file] ?? file)
  //   if (content) {
  //     fs.writeFileSync(targetPath, content)
  //   } else {
  //     copy(path.join(templateDir, file), targetPath)
  //   }
  // }

  // const files = fs.readdirSync(templateDir)
  // for (const file of files.filter((f) => f !== 'package.json')) {
  //   write(file)
  // }

  // const pkg = JSON.parse(
  //   fs.readFileSync(path.join(templateDir, `package.json`), 'utf-8'),
  // )

  // pkg.name = packageName

  // write('package.json', JSON.stringify(pkg, null, 2) + '\n')

  // const cdProjectName = path.relative(cwd, root)
  // console.log(`\nDone. Now run:\n`)
  // if (root !== cwd) {
  //   console.log(
  //     `  cd ${cdProjectName.includes(' ') ? `"${cdProjectName}"` : cdProjectName
  //     }`,
  //   )
  // }
  // switch (pkgManager) {
  //   case 'yarn':
  //     console.log('  yarn')
  //     console.log('  yarn dev')
  //     break
  //   default:
  //     console.log(`  ${pkgManager} install`)
  //     console.log(`  ${pkgManager} run dev`)
  //     break
  // }
  console.log()
}

function copy(src: string, dest: string) {
  const stat = fs.statSync(src)
  if (stat.isDirectory()) {
    copyDir(src, dest)
  } else {
    fs.copyFileSync(src, dest)
  }
}

function copyDir(srcDir: string, destDir: string) {
  fs.mkdirSync(destDir, { recursive: true })
  for (const file of fs.readdirSync(srcDir)) {
    const srcFile = path.resolve(srcDir, file)
    const destFile = path.resolve(destDir, file)
    copy(srcFile, destFile)
  }
}

// function pkgFromUserAgent(userAgent: string | undefined) {
//   if (!userAgent) return undefined
//   const pkgSpec = userAgent.split(' ')[0]
//   const pkgSpecArr = pkgSpec.split('/')
//   return {
//     name: pkgSpecArr[0],
//     version: pkgSpecArr[1],
//   }
// }

init().catch((e) => {
  console.error(e)
})