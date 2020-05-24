###
 # @Author: xiatian
 # @Date: 2020-04-15 19:54:44
 # @LastEditors: xiatian
 # @LastEditTime: 2020-05-14 12:46:15
 ###
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://tommymarc.github.io
# git push -f git@github.com:tommymarc/tommymarc.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:tommymarc/tommyblog.git master:gh-pages

cd -