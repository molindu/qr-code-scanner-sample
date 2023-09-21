import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Rectangle from '../src/components/Rectangle'
// import { rgbaColor } from 'react-native-reanimated'
import colors from '../assets/colors'

export default function Scan() {
    return (
        <View style={[styles.cameraContainer]}>
            <View style={{ flexDirection: 'row', zIndex: 1, marginBottom: 510, }}>
                <Rectangle rectangle={{
                    width: 24,
                    height: 24,
                    marginRight: 290,
                    borderTopLeftRadius: 15,
                    borderColor: '#fff',
                    borderLeftWidth: 5,
                    borderTopWidth: 5,

                }} />
                <Rectangle rectangle={{
                    width: 24,
                    height: 24,
                    borderTopRightRadius: 15,
                    borderColor: '#fff',
                    borderRightWidth: 5,
                    borderTopWidth: 5,

                }} />

            </View>
            <View style={styles.middleContainer}>
                <Rectangle rectangle={{ height: 174, width: 328, backgroundColor: '#00000080', }} />
                <View style={styles.scan}>
                    <Rectangle rectangle={{ height: 200, width: 64, backgroundColor: '#00000080', }} />
                    <View style={[styles.markerContainer,]}>
                        <View style={{ flexDirection: 'row', }}>
                            <View style={[styles.view, styles.one]}></View>
                            <View style={[styles.view, styles.two]}></View>
                        </View>

                        <View style={{ flexDirection: 'row', }}>
                            <View style={[styles.view, styles.three]}></View>
                            <View style={[styles.view, styles.four]}></View>
                        </View>

                    </View>
                    <Rectangle rectangle={{ height: 200, width: 64, backgroundColor: '#00000080', }} />

                </View>
                <Rectangle rectangle={{ height: 174, width: 328, backgroundColor: '#00000080', }} />
            </View>
            <View style={{ flexDirection: 'row', zIndex: 1, }}>
                <Rectangle rectangle={{
                    width: 24,
                    height: 24,
                    marginRight: 290,
                    borderBottomLeftRadius: 15,
                    borderColor: '#fff',
                    borderLeftWidth: 5,
                    borderBottomWidth: 5,

                }} />
                <Rectangle rectangle={{
                    width: 24,
                    height: 24,
                    // backgroundColor: 'yellow',
                    borderBottomRightRadius: 15,
                    borderColor: '#fff',
                    borderRightWidth: 5,
                    borderBottomWidth: 5,


                }} />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cameraContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#fff',

    },
    middleContainer: {
        justifyContent: 'center',
        position: 'absolute',
        alignItems: 'center',
        height: 544,
        width: 328,
        flexDirection: 'column',
    },
    scan: {
        flexDirection: 'row',
        height: 200,
    },
    view: {
        width: 32,
        height: 32,
        backgroundColor: 'transparent'
    },
    one: {

        borderTopColor: colors.BLUE,
        borderTopWidth: 2,
        borderLeftColor: colors.BLUE,
        borderLeftWidth: 2,
        marginRight: 136,
        marginBottom: 70,
    },
    two: {

        borderTopColor: colors.BLUE,
        borderTopWidth: 2,
        borderRightColor: colors.BLUE,
        borderRightWidth: 2,
        marginBottom: 70,
    },
    three: {
        borderBottomColor: colors.BLUE,
        borderBottomWidth: 2,
        borderLeftColor: colors.BLUE,
        borderLeftWidth: 2,
        marginRight: 136,
        marginTop: 66,

    },
    four: {
        borderBottomColor: colors.BLUE,
        borderBottomWidth: 2,
        borderRightColor: colors.BLUE,
        marginTop: 66,
        borderRightWidth: 2,
    },
    markerContainer: {
        // borderColor: 'red',
        // borderWidth: 2,
        // borderRadius: 10,
        height: 200, // Set the height of the scanning area
        width: 200,  // Set the width of the scanning area
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        // backgroundColor: ' #181e94',
    },
})