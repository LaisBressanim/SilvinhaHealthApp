export const calcularPesoIdeal = (altura, sexo) => {
const alturaCm = altura * 100;
let pesoIdeal = 0;
if (sexo === 'masculino') {
pesoIdeal = 50 + 2.3 * ((alturaCm - 152.4) / 2.54);
} else {
pesoIdeal = 45.5 + 2.3 * ((alturaCm - 152.4) / 2.54);
}
return pesoIdeal.toFixed(1);
};
const [sexo, setSexo] = useState(null);

<TouchableOpacity
style={[
styles.sexButton,
sexo === 'masculino' && styles.sexButtonSelected,
]}
onPress={() => setSexo('masculino')}
>
<Text style={styles.sexIcon}>👨</Text>
<Text style={[
styles.sexText,
sexo === 'masculino' && styles.sexTextSelected
]}>
Masculino
</Text>
</TouchableOpacity>