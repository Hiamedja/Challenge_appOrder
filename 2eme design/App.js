import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput, 
    Dimensions,
    Platform, 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const { width } = Dimensions.get('window');

const App = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.dashboardContainer}>
                <View style={styles.topHeader}>
                    <View style={styles.headerLeft}>
                        <Image source={require('./assets/img/Logoo.jpeg')} style={styles.headerLogo} />
                        <View style={styles.searchBarContainer}>
                            <Icon name="search" size={16} color="#9292b3" style={styles.searchIcon} />
                            <TextInput
                                style={styles.searchBar}
                                placeholder="Rechercher..."
                                placeholderTextColor="#9292b3"
                            />
                        </View>
                    </View>
                    <View style={styles.headerActions}>
                        <TouchableOpacity style={styles.headerButton}>
                            <Icon name="bell" size={20} color="white" />
                            <Text style={styles.notificationBadgeHeader}>13</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.headerButton}>
                            <Icon name="bars" size={20} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView style={styles.mainContent}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsScrollView}>
                        <TouchableOpacity style={[styles.tabButton, styles.tabButtonActiveStyle]}>
                            <Icon name="receipt" size={16} color="#ffffff" />
                            <Text style={styles.tabButtonText}>Commandes reçues </Text>
                            <Text style={styles.badgeCmd}>1</Text>
                        </TouchableOpacity>
                    </ScrollView>

                    <View style={styles.boardsContainer}>
                        <View style={styles.board}>
                            <Text style={styles.boardTitle}>À préparer</Text>
                            <View style={styles.orderCard}>
                                <View style={styles.orderHeader}>
                                    <Text style={styles.customerName}>Jake</Text>
                                    <Text style={styles.orderNumber}>#295</Text>
                                </View>
                                <View style={styles.orderItemsList}>
                                    <View style={styles.orderItem}>
                                        <View style={[styles.colorSquare, styles.redSquare]} />
                                        <Text style={styles.quantity}>x1</Text>
                                        <Text style={styles.orderItemDisplayName}>PANINI DINDE</Text>
                                    </View>
                                    <View style={styles.orderItem}>
                                        <View style={[styles.colorSquare, styles.orangeSquareMain]} />
                                        <Text style={styles.quantity}>x2</Text>
                                        <Text style={styles.orderItemDisplayName}>BIÈRE 50CL</Text>
                                    </View>
                                    <View style={styles.orderItem}>
                                        <View style={[styles.colorSquare, styles.greenSquare]} />
                                        <Text style={styles.quantity}>x1</Text>
                                        <Text style={styles.orderItemDisplayName}>BOUTEILLE D'EAU</Text>
                                    </View>
                                </View>
                                <View style={styles.orderFooter}>
                                    <Text style={styles.timeLabel}>6 min</Text>
                                </View>
                            </View>
                            <View style={styles.emptyCard} />
                            <View style={styles.emptyCard} />
                            <View style={styles.emptyCard} />
                        </View>

                        <View style={styles.board}>
                            <Text style={styles.boardTitle}>Prêts</Text>
                            <View style={styles.orderCard}>
                                <View style={styles.orderHeader}>
                                    <Text style={[styles.customerName, styles.customerNameReady]}>Tiffany</Text>
                                    <Text style={[styles.orderNumber, styles.orderNumberReady]}>#294</Text>
                                </View>
                                <View style={styles.orderItemsList}>
                                    <View style={styles.orderItem}>
                                        <View style={[styles.colorSquare, styles.redSquare]} />
                                        <Text style={styles.quantity}>x2</Text>
                                        <Text style={styles.orderItemDisplayName}>PANINI JAMBO</Text>
                                    </View>
                                    <View style={styles.orderItem}>
                                        <View style={[styles.colorSquare, styles.orangeSquareMain]} />
                                        <Text style={styles.quantity}>x1</Text>
                                        <Text style={styles.orderItemDisplayName}>BIÈRE 50CL</Text>
                                    </View>
                                    <View style={styles.orderItem}>
                                        <View style={[styles.colorSquare, styles.greenSquare]} />
                                        <Text style={styles.quantity}>x1</Text>
                                        <Text style={styles.orderItemDisplayName}>BOUTEILLE D'EAU</Text>
                                    </View>
                                </View>
                                <View style={styles.orderFooter}>
                                    <Text style={[styles.timeLabel, styles.timeLabelReady]}>Ready</Text>
                                </View>
                            </View>
                            <View style={styles.emptyCard} />
                            <View style={styles.emptyCard} />
                            <View style={styles.emptyCard} />
                        </View>
                    </View>
                </ScrollView>

                <View style={styles.bottomNavBar}>
                    <TouchableOpacity style={[styles.navItemBottom, styles.navItemActiveBottom]}>
                        <Icon name="bell" size={24} color="#ffffff" />
                        <Text style={styles.notificationBadgeBottom}>13</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navItemBottom}>
                        <Icon name="th-large" size={24} color="#9292b3" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navItemBottom}>
                        <Icon name="chart-bar" size={24} color="#9292b3" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navItemBottom}>
                        <Icon name="utensils" size={24} color="#9292b3" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navItemBottom}>
                        <Icon name="cog" size={24} color="#9292b3" />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#1a1a2e',
    },
    dashboardContainer: {
        flex: 1,
        backgroundColor: '#16162a',
        borderRadius: 20,
        marginVertical: 10,
        marginHorizontal: 10,
        overflow: 'hidden',
    },

    topHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#1c1c36', 
        borderBottomWidth: 1,
        borderBottomColor: '#28284e',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1, 
    },
    headerLogo: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        marginRight: 10,
        borderRadius: 8,
    },
    searchBar: {
        flex: 1,
        backgroundColor: '#2e2e5e',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 8,
        color: '#ffffff',
        fontSize: 14,
    },

    
    time: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 13,
        backgroundColor: '#1B2B59',
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 8,
        overflow: 'hidden',
        marginRight: 8,
    },

    headerActions: {
        flexDirection: 'row',
        gap: 10,
        marginLeft: 15,
    },
    headerButton: {
        backgroundColor: '#2e2e5e',
        width: 35,
        height: 35,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    notificationBadgeHeader: {
        position: 'absolute',
        top: -5,
        right: -5,
        backgroundColor: '#ff4d4f',
        color: 'white',
        fontSize: 10,
        fontWeight: '600',
        width: 18,
        height: 18,
        borderRadius: 9,
        textAlign: 'center',
        lineHeight: 18,
        borderWidth: 1,
        borderColor: '#1c1c36',
    },

   
    mainContent: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 15,
        paddingBottom: 20,
    },

    
    tabsScrollView: {
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#2e2e5e',
        paddingBottom: 10,
    },
    tabButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginRight: 10,
        borderRadius: 8,
    },
    tabButtonText: {
        color: '#9292b3',
        fontSize: 13,
        fontWeight: '600',
        marginLeft: 5,
    },
    
    searchBarContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2e2e5e',
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    searchIcon: {
        marginRight: 8,
    },
    searchBar: {
        flex: 1,
        color: '#ffffff',
        fontSize: 14,
        paddingVertical: 8,
    },

    tabButtonActiveStyle: {
        backgroundColor: '#2e2e5e',
        
    },
    badge: {
        backgroundColor: '#79d70f',
        color: '#16162a',
        fontSize: 9,
        fontWeight: '700',
        width: 18,
        height: 18,
        borderRadius: 9,
        textAlign: 'center',
        lineHeight: 18,
        marginLeft: 5,
    },
    badgeCmd: {
        backgroundColor: '#382cda',
        color: '#16162a',
        fontSize: 9,
        fontWeight: '700',
        width: 18,
        height: 18,
        borderRadius: 9,
        textAlign: 'center',
        lineHeight: 18,
        marginLeft: 5,
    },
    badgeTrm: {
        backgroundColor: '#464461',
        color: '#16162a',
        fontSize: 9,
        fontWeight: '700',
        width: 18,
        height: 18,
        borderRadius: 9,
        textAlign: 'center',
        lineHeight: 18,
        marginLeft: 5,
    },


    boardsContainer: {
        flexDirection: 'column',
        gap: 20, 
        paddingBottom: 20, 
    },
    board: {
        flexDirection: 'column',
        gap: 15, 
    },
    boardTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: '#ffffff',
        marginBottom: 5,
    },

    orderCard: {
        backgroundColor: '#1c1c36',
        borderRadius: 10,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
        minHeight: 100,
    },
    orderHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    customerName: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#ffffff',
    },
    orderNumber: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#9292b3',
    },
    orderItemsList: {
        flexDirection: 'column',
        gap: 5,
    },
    orderItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    orderItemDisplayName: {
        fontSize: 14,
        color: '#c9c9e0',
    },
    quantity: {
        fontWeight: 'bold',
        marginRight: 5,
        minWidth: 20,
        color: '#c9c9e0',
    },
    colorSquare: {
        width: 12,
        height: 12,
        borderRadius: 2,
        marginRight: 8,
    },
    redSquare: { backgroundColor: '#e74c3c' },
    orangeSquareMain: { backgroundColor: '#e67e22' },
    greenSquare: { backgroundColor: '#2ecc71' },

    orderFooter: {
        marginTop: 10,
        alignSelf: 'flex-end',
    },
    timeLabel: {
        fontSize: 12,
        color: '#888',
    },
    readyCardStyle: {
      backgroundColor: '#d4edda',
      borderColor: '#c3e6cb',
    },
    orderNumberReady: {
      color: '#65676b',
    },
    timeLabelReady: {
      color: '#65676b',
    },
    emptyCard: {
        backgroundColor: '#28284E',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#c0c0c0',
        borderRadius: 10,
        minHeight: 100,
    },

    card: {
        backgroundColor: '#1c1c36',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        position: 'relative',
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        width: '100%',
        marginBottom: 10,
    },
    cardHeaderSmall: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 10,
        position: 'absolute',
        top: 15,
        right: 15,
    },
    
    cardMenuIcon: {
    },
    userInfo: {
        marginTop: 20,
        marginBottom: 20,
        alignItems: 'center',
    },
    userAvatar1: {
        width: 90,
        height: 90,
        borderRadius: 45,
        borderWidth: 5,
        borderColor: '#b13f2e',
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.4,
        shadowRadius: 15,
        elevation: 5,
    },
    userAvatar2: {
        width: 90,
        height: 90,
        borderRadius: 45,
        borderWidth: 5,
        borderColor: '#ffd7b3',
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.4,
        shadowRadius: 15,
        elevation: 5,
    },
    userAvatar3: {
        width: 90,
        height: 90,
        borderRadius: 45,
        borderWidth: 5,
        borderColor: '#4a7aff',
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.4,
        shadowRadius: 15,
        elevation: 5,
    },
    userAvatar4: {
        width: 90,
        height: 90,
        borderRadius: 45,
        borderWidth: 5,
        borderColor: '#ffc719',
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.4,
        shadowRadius: 15,
        elevation: 5,
    },
    userName: {
        fontSize: 18,
        fontWeight: '700',
        color: '#ffffff',
        letterSpacing: 1,
    },
   
    iconCircle: {
        width: 100, 
        height: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        elevation: 5,
        marginBottom: 15, 
    },
    iconCircleImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    hr: {
        borderTopWidth: 1,
        borderTopColor: '#cccccc28',
        marginVertical: 20,
        width: '60%',
    },
    orderDetailsList: {
        width: '100%',
        flexDirection: 'column',
        gap: 8,
    },
    orderItemIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    orderItemTextGeneral: {
        fontSize: 14,
        fontWeight: '500',
        color: '#c9c9e0',
    },
    blueSquare: { backgroundColor: '#4a7aff' },
    yellowSquare: { backgroundColor: '#ffc719' },
    orangeSquareSecondary: { backgroundColor: '#ff8c00' }, 

    
    bottomNavBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#1c1c36', 
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#28284e',
        paddingBottom: Platform.OS === 'ios' ? 20 : 10,
    },
    navItemBottom: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    navItemActiveBottom: {
        backgroundColor: '#2e2e5e', 
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    notificationBadgeBottom: {
        position: 'absolute',
        top: -5,
        right: -5,
        backgroundColor: '#ff4d4f',
        color: 'white',
        fontSize: 10,
        fontWeight: '600',
        width: 18,
        height: 18,
        borderRadius: 9,
        textAlign: 'center',
        lineHeight: 18,
        borderWidth: 1,
        borderColor: '#1c1c36',
    },

    customerNameReady: {
        color: '#fff',
    },
});

export default App;
