# Turbinate 🚀

[![npm version](https://badge.fury.io/js/%40dixavier27%2Fturbinate.svg)](https://badge.fury.io/js/%40dixavier27%2Fturbinate)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Make your repository fly** - A TypeScript MongoDB/Mongoose utility library that provides a clean, standardized interface for common database operations.

---

## 🇺🇸 English

### Overview

Turbinate is a lightweight TypeScript library built on top of Mongoose that simplifies MongoDB operations by providing a standardized interface for CRUD operations. It's designed to make your database interactions more consistent and reduce boilerplate code in your Node.js applications.

### Features

- ✅ **TypeScript First**: Full TypeScript support with strong typing
- ✅ **Mongoose Integration**: Built on top of the popular Mongoose ODM
- ✅ **CRUD Operations**: Standardized Create, Read, Update, Delete operations
- ✅ **Flexible Filtering**: Support for MongoDB query filters
- ✅ **Parent Model Support**: Handle model inheritance scenarios
- ✅ **ESM & CJS**: Dual package support for modern and legacy projects
- ✅ **Lightweight**: Minimal dependencies and overhead

### Installation

```bash
npm install @dixavier27/turbinate
```

```bash
yarn add @dixavier27/turbinate
```

### Quick Start

```typescript
import mongoose from 'mongoose';
import Turbinate from '@dixavier27/turbinate';

// Define your schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

// Create your model
const UserModel = mongoose.model('User', userSchema);

// Initialize Turbinate
const userRepository = new Turbinate(UserModel);

// Use the repository
async function example() {
  // Create a new user
  const newUser = await userRepository.create({
    name: 'John Doe',
    email: 'john@example.com',
    age: 30
  });

  // Read a user
  const user = await userRepository.read({ email: 'john@example.com' });

  // Update a user
  const updatedUser = await userRepository.update(
    { email: 'john@example.com' },
    { age: 31 }
  );

  // Search users
  const users = await userRepository.search({ age: { $gte: 25 } });

  // Remove a user
  await userRepository.remove(user._id);
}
```

### API Reference

#### Constructor

```typescript
new Turbinate<T>(model: Model<T>, parentModel?: Model<T>)
```

- `model`: The primary Mongoose model
- `parentModel` (optional): Parent model for inheritance scenarios

#### Methods

##### `create(data: T): Promise<T>`
Creates a new document in the database.

```typescript
const user = await repository.create({
  name: 'Jane Doe',
  email: 'jane@example.com'
});
```

##### `update(filter: RootFilterQuery<T>, data: UpdateQuery<T>, unset?: AnyKeys<T>): Promise<T | null>`
Updates a document that matches the filter.

```typescript
const updatedUser = await repository.update(
  { email: 'jane@example.com' },
  { name: 'Jane Smith' }
);
```

##### `replace(_id: Types.ObjectId, data: T): Promise<T | null>`
Replaces an entire document by ID.

```typescript
const replacedUser = await repository.replace(userId, {
  name: 'New Name',
  email: 'new@example.com',
  age: 25
});
```

##### `read(filters: RootFilterQuery<T>): Promise<Document<T> | null>`
Finds a single document that matches the filters.

```typescript
const user = await repository.read({ email: 'jane@example.com' });
```

##### `search(filters: RootFilterQuery<T>): Promise<T[]>`
Finds multiple documents that match the filters.

```typescript
const users = await repository.search({ age: { $gte: 18 } });
```

##### `remove(_id: Types.ObjectId): Promise<T | null>`
Removes a document by ID.

```typescript
const deletedUser = await repository.remove(userId);
```

### Advanced Usage

#### With Parent Model (Inheritance)

```typescript
const BaseModel = mongoose.model('Base', baseSchema);
const ChildModel = mongoose.model('Child', childSchema);

const repository = new Turbinate(ChildModel, BaseModel);

// Read and search operations will use the parent model
const result = await repository.read({ someField: 'value' });
```

### TypeScript Support

Turbinate is built with TypeScript and provides full type safety:

```typescript
interface User {
  name: string;
  email: string;
  age: number;
}

const UserModel = mongoose.model<User>('User', userSchema);
const repository = new Turbinate<User>(UserModel);

// All operations are now type-safe
const user = await repository.create({
  name: 'John',
  email: 'john@example.com',
  age: 30
});
```

### Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Author

**Affonso Xavier** - [@dixavier27](https://github.com/dixavier27)

---

## 🇧🇷 Português (Brasil)

### Visão Geral

Turbinate é uma biblioteca TypeScript leve construída sobre o Mongoose que simplifica operações do MongoDB fornecendo uma interface padronizada para operações CRUD. Foi projetada para tornar suas interações com banco de dados mais consistentes e reduzir código repetitivo em suas aplicações Node.js.

### Funcionalidades

- ✅ **TypeScript em Primeiro Lugar**: Suporte completo ao TypeScript com tipagem forte
- ✅ **Integração com Mongoose**: Construída sobre o popular ODM Mongoose
- ✅ **Operações CRUD**: Operações padronizadas de Criar, Ler, Atualizar, Deletar
- ✅ **Filtragem Flexível**: Suporte para filtros de consulta do MongoDB
- ✅ **Suporte a Modelo Pai**: Trata cenários de herança de modelos
- ✅ **ESM & CJS**: Suporte duplo para projetos modernos e legados
- ✅ **Leve**: Dependências e overhead mínimos

### Instalação

```bash
npm install @dixavier27/turbinate
```

```bash
yarn add @dixavier27/turbinate
```

### Início Rápido

```typescript
import mongoose from 'mongoose';
import Turbinate from '@dixavier27/turbinate';

// Defina seu schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

// Crie seu modelo
const UserModel = mongoose.model('User', userSchema);

// Inicialize o Turbinate
const userRepository = new Turbinate(UserModel);

// Use o repositório
async function exemplo() {
  // Criar um novo usuário
  const novoUsuario = await userRepository.create({
    name: 'João Silva',
    email: 'joao@exemplo.com',
    age: 30
  });

  // Ler um usuário
  const usuario = await userRepository.read({ email: 'joao@exemplo.com' });

  // Atualizar um usuário
  const usuarioAtualizado = await userRepository.update(
    { email: 'joao@exemplo.com' },
    { age: 31 }
  );

  // Buscar usuários
  const usuarios = await userRepository.search({ age: { $gte: 25 } });

  // Remover um usuário
  await userRepository.remove(usuario._id);
}
```

### Referência da API

#### Construtor

```typescript
new Turbinate<T>(model: Model<T>, parentModel?: Model<T>)
```

- `model`: O modelo Mongoose principal
- `parentModel` (opcional): Modelo pai para cenários de herança

#### Métodos

##### `create(data: T): Promise<T>`
Cria um novo documento no banco de dados.

```typescript
const usuario = await repository.create({
  name: 'Maria Silva',
  email: 'maria@exemplo.com'
});
```

##### `update(filter: RootFilterQuery<T>, data: UpdateQuery<T>, unset?: AnyKeys<T>): Promise<T | null>`
Atualiza um documento que corresponde ao filtro.

```typescript
const usuarioAtualizado = await repository.update(
  { email: 'maria@exemplo.com' },
  { name: 'Maria Santos' }
);
```

##### `replace(_id: Types.ObjectId, data: T): Promise<T | null>`
Substitui um documento inteiro por ID.

```typescript
const usuarioSubstituido = await repository.replace(userId, {
  name: 'Novo Nome',
  email: 'novo@exemplo.com',
  age: 25
});
```

##### `read(filters: RootFilterQuery<T>): Promise<Document<T> | null>`
Encontra um único documento que corresponde aos filtros.

```typescript
const usuario = await repository.read({ email: 'maria@exemplo.com' });
```

##### `search(filters: RootFilterQuery<T>): Promise<T[]>`
Encontra múltiplos documentos que correspondem aos filtros.

```typescript
const usuarios = await repository.search({ age: { $gte: 18 } });
```

##### `remove(_id: Types.ObjectId): Promise<T | null>`
Remove um documento por ID.

```typescript
const usuarioDeletado = await repository.remove(userId);
```

### Uso Avançado

#### Com Modelo Pai (Herança)

```typescript
const ModeloBase = mongoose.model('Base', schemaBase);
const ModeloFilho = mongoose.model('Filho', schemaFilho);

const repository = new Turbinate(ModeloFilho, ModeloBase);

// Operações de leitura e busca usarão o modelo pai
const resultado = await repository.read({ algumCampo: 'valor' });
```

### Suporte ao TypeScript

Turbinate é construído com TypeScript e fornece segurança de tipos completa:

```typescript
interface Usuario {
  name: string;
  email: string;
  age: number;
}

const UserModel = mongoose.model<Usuario>('User', userSchema);
const repository = new Turbinate<Usuario>(UserModel);

// Todas as operações agora são type-safe
const usuario = await repository.create({
  name: 'João',
  email: 'joao@exemplo.com',
  age: 30
});
```

### Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para enviar um Pull Request.

### Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

### Autor

**Affonso Xavier** - [@dixavier27](https://github.com/dixavier27)

---

## 🔗 Links

- [GitHub Repository](https://github.com/dixavier27/turbinate)
- [npm Package](https://www.npmjs.com/package/@dixavier27/turbinate)
- [Issues](https://github.com/dixavier27/turbinate/issues)

## 📊 Stats

![npm](https://img.shields.io/npm/dt/@dixavier27/turbinate)
![GitHub stars](https://img.shields.io/github/stars/dixavier27/turbinate)
![GitHub forks](https://img.shields.io/github/forks/dixavier27/turbinate)
