import * as bcrypt from 'bcrypt';

// Função para gerar um salt baseado no tamanho da senha
function generateSalt(password: string): Promise<string> {
    let saltRounds: number;

    if (password.length >= 20) {
        saltRounds = 12; // Número de rounds para senhas com 20 ou mais caracteres
    } else if (password.length >= 10) {
        saltRounds = 10; // Número de rounds para senhas com 10 ou mais caracteres
    } else {
        saltRounds = 8; // Número de rounds para senhas com menos de 10 caracteres
    }

    return bcrypt.genSalt(saltRounds);
}

export async function generatePassword(password: string): Promise<string> {
    const salt = await generateSalt(password);
    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;
}